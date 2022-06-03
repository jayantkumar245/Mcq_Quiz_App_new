import "./Question.css";

export default function Question(props) {
  return (
    <>
      <h1>{props.number}</h1>
      <h5>{props.difficult}</h5>
      <h3>{props.question}</h3>
    </>
  );
}
