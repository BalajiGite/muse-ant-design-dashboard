import React ,{useState,useEffect}from "react";
import { Card, Col, Row, Typography, } from "antd";
import { getConsumptionData } from "../../services/DashboardService";


function Consumption(props) {
  const [post, setPost] = useState({});
  const [loading, setloading] = useState(true);
  

 
  const getData = async () => {
    try {
      const resp = await getConsumptionData();
      // console.log(resp)
      setPost(resp)
      setloading(false)

    } catch (error) {
    }
  };
 const data = loading
  ? []
  : post




  useEffect(() => {
    getData()
  }, []);
  const { Title } = Typography;
  return (
    <>
   
    <Card bordered={false} className="criclebox ">
      <div className="number">
        <Row align="middle" gutter={[24, 0]}>
          <Col xs={15}>
            <div className="icon-box ">{props?.data?.icon}</div>
          </Col>
          <Col className="col text-center" xs={24}>
            <span className="dashboardCard">{props?.data?.today}</span>
            <Title level={2}>
              <span className="dashboardCardTitle">{props.data.title}</span>
              <small className={props.data.bnb}>{props?.data?.persent}</small>
              <p>{props?.data?.dec}</p>
            </Title>
          </Col>
        </Row>
      </div>
    </Card>
    </>
  )
}
export default Consumption;