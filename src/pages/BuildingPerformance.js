import React from "react";
import { Row, Col, Card } from "antd";
import Donut from "../components/chart/buildingPerformance/DonutChart";
import Mixchart from "../components/chart/buildingPerformance/Mixchart";
import StackedChart from "../components/chart/buildingPerformance/StackedChart";
import DonutS from "../components/chart/buildingPerformance/DonutS";
import WaterChart from "../components/chart/buildingPerformance/WaterChart";
import MeterChart from "../components/chart/buildingPerformance/MeterChart";
import MeterChartS from "../components/chart/buildingPerformance/MeterChartS";

const fireAlarm = [
  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
    <path d="M2.125 9q0-1.771.75-3.333Q3.625 4.104 5 3l1.083 1.083q-1.166.875-1.812 2.167Q3.625 7.542 3.625 9Zm14.25 0q0-1.458-.646-2.75t-1.812-2.167L15 3q1.375 1.104 2.125 2.667.75 1.562.75 3.333ZM4 15.5V14h1V9q0-1.792 1.115-3.177Q7.229 4.438 9 4.104V3q0-.417.292-.708Q9.583 2 10 2t.708.292Q11 2.583 11 3v1.104q1.771.334 2.885 1.708Q15 7.188 15 9v5h1v1.5Zm6-5.875ZM10 18q-.625 0-1.062-.438Q8.5 17.125 8.5 16.5h3q0 .625-.438 1.062Q10.625 18 10 18Zm-3.5-4h7V9q0-1.458-1.021-2.479Q11.458 5.5 10 5.5q-1.458 0-2.479 1.021Q6.5 7.542 6.5 9Z" />
  </svg>,
];

const modefan = [
  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
    <path d="M8.729 17.5q-.75 0-1.281-.49-.531-.489-.531-1.26 0-.458.208-.896.208-.437.604-.687.459-.313.75-.834.292-.521.417-1.125-.167-.083-.302-.187-.136-.104-.282-.229l-1.708.687q-.292.104-.594.156-.302.053-.614.053-1.542 0-2.219-1.23Q2.5 10.229 2.5 8.729q0-.75.49-1.281.489-.531 1.26-.531.479 0 .906.208.427.208.677.625.334.458.844.74.511.281 1.135.427.063-.167.157-.313.093-.146.239-.292l-.687-1.708q-.104-.292-.156-.594-.053-.302-.053-.614.021-1.625 1.323-2.261Q9.938 2.5 11.271 2.5q.75 0 1.281.49.531.489.531 1.239 0 .479-.208.917-.208.437-.604.687-.459.334-.74.844-.281.511-.427 1.135.167.063.313.167.145.104.271.229l1.645-.666q.313-.104.625-.167.313-.063.646-.063 1.354 0 2.125 1.136.771 1.135.771 2.844 0 .75-.49 1.281-.489.531-1.239.531-.479 0-.917-.219-.437-.218-.687-.614-.313-.459-.834-.75-.521-.292-1.125-.417-.083.167-.187.302-.104.136-.229.282l.666 1.645q.104.313.167.636.063.323.063.635-.021 1.375-1.167 2.136-1.146.76-2.792.76ZM10 11.375q.583 0 .979-.396t.396-.979q0-.583-.396-.979T10 8.625q-.583 0-.979.396T8.625 10q0 .583.396.979t.979.396Zm-.792-3.687q.167-.105.354-.136.188-.031.376-.031.166-.854.572-1.542.407-.687 1.073-1.104.167-.125.24-.292.073-.166.073-.333 0-.25-.177-.406-.177-.156-.448-.156-1.021 0-1.896.385T8.5 5.396q0 .187.031.364.031.178.094.344ZM5.396 11.5q.187 0 .792-.146l1.52-.562q-.083-.167-.135-.354-.052-.188-.052-.376-.854-.166-1.542-.572-.687-.407-1.104-1.073-.104-.167-.271-.24-.166-.073-.354-.073-.25 0-.406.177-.156.177-.156.448 0 1.042.395 1.906.396.865 1.313.865Zm3.333 4.812q1.021 0 1.896-.395.875-.396.875-1.313 0-.25-.042-.479-.041-.229-.125-.437l-.541-1.396q-.167.083-.365.125-.198.041-.365.062-.166.854-.572 1.542-.407.687-1.073 1.104-.146.104-.24.271-.094.166-.073.354.021.229.188.396.166.166.437.166Zm7.042-4.416q.229 0 .385-.177t.156-.448q0-1.021-.385-1.896T14.604 8.5q-.229 0-.416.031-.188.031-.396.115l-1.5.562q.083.167.125.354.041.188.062.376.854.166 1.542.572.687.407 1.104 1.073.104.146.281.229.177.084.365.084Zm-3.292-1.958ZM9.938 7.521Zm-2.417 2.541Zm2.541 2.417Z" />
  </svg>,
];
const electric = [
  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
    <path d="M7.479 17.146q-.208-.208-.208-.469 0-.26.146-.489l3.312-4.813-6.791-.458q-.292-.021-.386-.292-.094-.271.115-.458l7.895-7.334q.209-.187.48-.198.27-.01.479.198.208.209.208.469t-.146.49L9.271 8.625l6.791.458q.292.021.376.282.083.26-.105.447l-7.895 7.334q-.209.187-.48.198-.27.01-.479-.198Z" />
  </svg>,
];
const water = [
  <svg xmlns="http://www.w3.org/2000/svg" height="20" width="20">
    <path d="M10.562 15.333q.126-.021.219-.125.094-.104.094-.25 0-.187-.135-.291-.136-.105-.302-.063-1.209.167-2.271-.594-1.063-.76-1.25-2.01-.021-.167-.115-.271-.094-.104-.24-.104-.166 0-.291.125-.125.125-.083.312.208 1.563 1.51 2.521 1.302.959 2.864.75ZM10 17.583q-2.542 0-4.312-1.781-1.771-1.781-1.771-4.302 0-1.875 1.448-3.99Q6.812 5.396 10 2.542q3.25 3 4.667 5.093 1.416 2.094 1.416 3.865 0 2.521-1.781 4.302-1.781 1.781-4.302 1.781Zm0-1.083q2.083 0 3.542-1.458Q15 13.583 15 11.5q0-1.417-1.125-3.104Q12.75 6.708 10 3.979 7.25 6.708 6.125 8.396 5 10.083 5 11.5q0 2.083 1.458 3.542Q7.917 16.5 10 16.5Zm0-6.438Z" />
  </svg>,
];
function BuildingPerformance() {
  return (
    <>
      <Row
        gutter={{
          xs: 8,
          sm: 16,
          md: 24,
          lg: 32,
        }}
      >
        <Col className="gutter-row" span={6}>
          <Card>
            <Row>
              {fireAlarm}
              {/* <Col style={{ width: "10%" }}></Col> */}
              <Col style={{ width: "71%" }}>
                Fire Alarm
                {/* {ckeck} */}
              </Col>
            </Row>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card>
            <Row justify="cenetr">
              {modefan}
              {/* <Col style={{ width: "10%" }}></Col> */}
              <Col style={{ width: "71%" }}>
                Ventilation Services
                {/* {ckeck} */}
              </Col>
            </Row>
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card>
            <Row>
              {electric}
              {/* <Col style={{ width: "10%" }}></Col> */}
              <Col style={{ width: "71%" }}>
                Electrical Services
                {/* {ckeck} */}
              </Col>
            </Row>{" "}
          </Card>
        </Col>
        <Col className="gutter-row" span={6}>
          <Card>
            <Row>
              {water}

              <Col style={{ width: "71%" }}>
                Water Services
                {/* {ckeck} */}
              </Col>
            </Row>
          </Card>
        </Col>
      </Row>

      <Row style={{ marginTop: 20 }} gutter={[24, 0]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-24">
          <Card
            bordered={false}
            style={{ height: 450 }}
            className="criclebox h-full"
          >
            <Mixchart />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-24">
          <Card
            bordered={false}
            style={{ height: 450 }}
            className="criclebox h-full"
          >
            <MeterChart style={{}} />
          </Card>
        </Col>
      </Row>
      <Row style={{ marginTop: "" }} gutter={[24, 0]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-24">
          <Card
            bordered={false}
            style={{ height: 440 }}
            className="criclebox h-full"
          >
            <WaterChart />
          </Card>
        </Col>
        <Col xs={24} sm={24} md={12} lg={12} xl={12} className="mb-24">
          <Card
            bordered={false}
            style={{ height: 440 }}
            className="criclebox h-full"
          >
            <MeterChartS />
          </Card>
        </Col>
      </Row>

      <Row>
        <Col span={24}>
          <Donut />
        </Col>
      </Row>

      <Row gutter={[24, 0]}>
        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Card style={{ height: 480, width: "100%" }}>
            <StackedChart />
          </Card>
        </Col>

        <Col xs={24} sm={24} md={12} lg={12} xl={12}>
          <Card
            style={{
              height: 480,
              width: "100%",
              display: "inline-flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <DonutS />
          </Card>
        </Col>
      </Row>
    </>
  );
}
export default BuildingPerformance;
