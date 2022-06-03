import ProgressBar from "react-bootstrap/ProgressBar";

export default function ProgressBars(props) {
  return <ProgressBar variant="success" now={props.percentage} />;
}
