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
    console.log("error ==>", error);
  }
};

export const loginUser = async (user_name) => {
  try {
    const res = await fetch(`${base_url}/user/${user_name}`);
    return res;
  } catch (error) {
    console.log("error ==>", error);
  }
};

export const getUser = async (user_name) => {
  try {
    const res = await fetch(`${base_url}/user/${user_name}`);
    const {
      data: { user },
    } = await res.json();
    let cards = [];
    if (user) {
      cards = [
        {
          title: user.user_name,
          detail: "Username",
        },
        {
          title: user.ref_code,
          detail: "Personal invite code",
        },
        {
          title: user.added_by_ref_code,
          detail: "Total via code",
        },
      ];
    }
    return cards;
  } catch (error) {
    console.log("error ==>", error);
  }
};

export const allUsers = async () => {
  try {
    const res = await fetch(`${base_url}/users`);
    const data = await res.json();
    return data.users ?? [];
  } catch (error) {
    console.log("error ==>", error);
  }
};
