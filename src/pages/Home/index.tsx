import React from 'react';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';

import Input from '../../components/Input';

interface IFormValues {
  name: string;
}

const Home: React.FC = () => {
  const { register, handleSubmit, control } = useForm<IFormValues>();

  const onSubmit: SubmitHandler<IFormValues> = (data) => {
    alert(JSON.stringify(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="name"
        control={control}
        rules={{ required: true }}
        defaultValue=""
        render={({ field }) => <Input {...field} />}
      />

      <button type="submit">submit</button>
    </form>
  );
};

export default Home;
