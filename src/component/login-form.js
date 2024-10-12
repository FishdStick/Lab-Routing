import "../css/body.css"
import React from 'react';

export function LoginForm(){
    return (
        <form onSubmit={handleLoginSubmit}>
        <div>
          <label>Username </label>
          <input
            type="text"
            value={username}
            onChange={(e) => SetQuiz(e.target.value)}
            required
          />
        </div>
        <div>
          <label>Lab Activities Score: </label>
          <input
            type="password"
            value={password}
            onChange={(e) => SetLab(e.target.value)}
            required
          />
        </div>
        <button type="submit">Login</button>
      </form>
    );
}