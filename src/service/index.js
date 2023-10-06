import { jsonParser } from "../util";

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

export const getUserDataEventApi = async (callback) => {
  try {
    const res = await fetch(`${base_url}/user-events`);
    const reader = res.body.getReader();
    reader.read().then(function pump({ done, value }) {
      let event_res = new TextDecoder().decode(value);
      const data = event_res.split("data:");
      let result = data[1];
      if (result) {
        const dataToJson = jsonParser(result);
        callback(dataToJson);
      }
      if (done) {
        return;
      }
      return reader.read().then(pump);
    });
  } catch (error) {
    console.error(err);
  }
};
