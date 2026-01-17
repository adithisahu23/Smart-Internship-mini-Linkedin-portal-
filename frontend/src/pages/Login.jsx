export default function Login() {
  const login = async () => {
    const res = await fetch("http://localhost:5000/api/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email: "test@test.com",
        password: "123456"
      })
    });
    const data = await res.json();
    localStorage.setItem("token", data.token);
  };

  return <button onClick={login}>Login</button>;
}
