export default function Register() {
  const register = async () => {
    await fetch("http://localhost:5000/api/auth/register", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: "Student",
        email: "test@test.com",
        password: "123456",
        role: "student"
      })
    });
  };

  return <button onClick={register}>Register</button>;
}
