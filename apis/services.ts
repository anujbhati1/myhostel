import Http from './api';

export const getAllTodos = async (userId: string) => {
  try {
    // const {data} = await Http.get(`/api/todos/${userId}`);
    const {data} = await Http.get(`/api/todos/clvmimr890000f59c7j2f9abw`);
    return data.data;
  } catch (error: any) {
    throw new Error(error);
  }
};
