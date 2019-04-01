import Header from "../../components/Header/Header";

const layoutStyle = {
  backgroundColor:'#dae0e6'
}

const layout = props => (
  <div style={layoutStyle}>
      <Header
      />
      {props.children}
  </div>
);

export default layout;
