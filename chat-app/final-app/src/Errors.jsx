import { MESSAGES } from './constants';

function Errors({ error }) {

  const message = MESSAGES[error] || MESSAGES.default;
  return (
    <div className="errors">
      {error && message}
    </div>
  );
}

export default Errors;
