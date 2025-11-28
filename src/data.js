export const BASE_URL = "https://jsonplaceholder.typicode.com/todos?_limit=5";

export const fetchData = async () => {
  try {
    const response = await fetch(BASE_URL);
    if (!response.ok) {
      throw new Error("Conecting is wrong!");
    }
    const data = await response.json();
    return data;
  } catch (error) {
    alert(error);
  }
};


