export default function UserPage({ params }) {
    const { username } = params;
  
    return (
      <main>
        <h1>Welcome, {username}!</h1>
        <p>This is the profile page for {username}.</p>
      </main>
    );
  }
  