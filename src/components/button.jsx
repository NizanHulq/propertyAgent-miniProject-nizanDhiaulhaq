import { Button } from "reactstrap";

export default function MyButton(props) {
  const { label, icon } = props;
  return (
    <Button className={"ud-btn btn-thm "} {...props}>
      {icon} {label}
    </Button>
  );
}
