import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.min.css';

import { MdPhonelink, MdLaptopMac, MdDeleteForever } from 'react-icons/md';

import { Container, Header, AddTech } from './styles';

function Home() {
  const [tech, setTech] = useState([]);
  const [newTech, setNewTech] = useState('');

  /*
   * useCallback só recriar a função quando as variaves passada
   * como dependencia mudar. Retorna uma função
   */
  const handleAdd = useCallback(() => {
    if (newTech !== '') {
      setTech([...tech, newTech]);
      setNewTech('');

      toast.success('Tecnologia adicionada!');
    }
  }, [newTech, tech]);

  // useEffect sem passar dependencia será executado somente uma vez
  useEffect(() => {
    const storageTech = localStorage.getItem('tech');

    if (storageTech) {
      setTech(JSON.parse(storageTech));
    }
  }, []);

  // useEffect sera executado toda vez que a variavel tech mudar
  useEffect(() => {
    localStorage.setItem('tech', JSON.stringify(tech));
  }, [tech]);

  // useMemo retorna um valor toda vez que a variavel tech mudar
  const techSize = useMemo(() => tech.length, [tech]);

  function handleRemove(techFilter) {
    const filterTech = tech.filter(t => t !== techFilter);

    setTech(filterTech);

    toast.error('Tecnologia removida.');
  }

  return (
    <Container>
      <Header>
        <div>
          <MdPhonelink size={35} color="#191920" />
          <h1>TechList</h1>
        </div>
        <span>Você tem {techSize} tecnologias</span>
      </Header>

      <AddTech>
        <input
          type="text"
          value={newTech || ''}
          onChange={e => setNewTech(e.target.value)}
          required
        />
        <button type="button" onClick={handleAdd}>
          Adicionar
        </button>
      </AddTech>

      <ul>
        {tech.map(t => (
          <li key={t}>
            <div>
              <MdLaptopMac size={20} color="#222" />
              <span>{t}</span>
            </div>
            <button type="button" onClick={() => handleRemove(t)}>
              <MdDeleteForever size={20} color="#fff" />
            </button>
          </li>
        ))}
      </ul>
    </Container>
  );
}

export default Home;
