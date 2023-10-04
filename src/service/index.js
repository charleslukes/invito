const base_url = "http://localhost:3000/api";

export const register = async (body) => {
  try {
    const res = await fetch(`${base_url}/users`, {
      method: "post",
      body,
      headers: {
        "Content-Type": "application/json",
      },
    });

    return res;
  } catch (error) {
    console.log('error ==>', error);
  }
};

export const loginUser = async (user_name) => {
  try {
    const res = await fetch(`${base_url}/user/${user_name}`);
    return res;
  } catch (error) {
    console.log('error ==>', error);
  }
};

