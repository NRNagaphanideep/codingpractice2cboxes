const Box = (props) => {
  //  Write your code here.
  const { className, message } = props;
  const containerClassName = `box-container ${className}`;
  return (
    <div className={containerClassName}>
      <p className="message">{message}</p>
    </div>
  );
};

const element = (
  //  Write your code here.
  <div className="boxes-container">
    <h1 className="title">Boxes</h1>
    <div className="box-list-container">
      <Box className="yellow-color" message="Small" />
      <Box className="sky-blue-color" message="Medium" />
      <Box className="pink-color" message="Large" />
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
