import React, { useState, useEffect } from 'react';
import { useActions } from '../hooks/useActions';
import { useTypedSelector } from '../hooks/useTypedSelector';

const RepositoriesList: React.FC = () => {
  const [term, setTerm] = useState('');
  const { searchRepositories } = useActions();
  const { data, error, loading } = useTypedSelector((state) => state.repositories);

  useEffect(() => {
    console.log(data);
  }, [data]);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setTerm(e.target.value);
  };

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    searchRepositories(term);
  };

  return (
    <div>
      <form action='' onSubmit={onSubmit}>
        <input type='text' value={term} onChange={onChange} />
        <button>Search</button>
      </form>
      {loading && <div>loading...</div>}
      {error && <div>Error</div>}
      <ul>
        {data &&
          data.map((result, index) => {
            return <li key={index}>{result}</li>;
          })}
      </ul>
    </div>
  );
};

export default RepositoriesList;
