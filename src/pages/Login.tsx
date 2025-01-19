import { Button } from 'antd';

import { FieldValues, useForm } from 'react-hook-form';
import { useLoginMutation } from '../redux/features/auth/authApi';
import { verifyToken } from '../utils/verifyToken';
import { useAppDispatch } from '../redux/features/hook';
import { setUser } from '../redux/features/authSlice';
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate=useNavigate()
    const dispatch=useAppDispatch()
  const { register, handleSubmit } = useForm({
    defaultValues: {
      id: 'A-0002',
      password: 'admin12345',
    },
  });

  const [login, { data, error, isLoading }] = useLoginMutation();

  const onSubmit = async (formData:FieldValues) => {
    const loadingId=toast.loading("Loding in........")
    const userInfo = {
      id: formData.id,
      password: formData.password,
    };

    try {
      const result = await login(userInfo).unwrap(); // Trigger the mutation
        const user=verifyToken(result.data.accessToken)
        dispatch(setUser({user:user,token:result.data.accessToken}))
        toast.success('Login in .....' ,{id:loadingId,duration:2000})
        navigate(`/${user.role}/dashboard`)
        console.log(user);
    } catch (err) {
      toast.error('something went worng...',{id:loadingId,duration:2000})
      console.error('Login Error:', err);

    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label htmlFor="id">ID:</label>
        <input type="text" id="id" {...register('id')} />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" {...register('password')} />
      </div>
      <Button htmlType="submit" loading={isLoading}>Submit</Button> 
    </form>
  );
};

export default Login;
