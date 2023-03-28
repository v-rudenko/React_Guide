type Props = {
  text: string
}

const TodoTask = (props: Props) => {
  return (
    <li>{props.text}</li>
  )
}

export default TodoTask