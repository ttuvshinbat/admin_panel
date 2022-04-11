import React from "react";
import { useFood } from "../../contexts/FoodContext";
import { List, Row, Col, Divider } from "antd";
export default function FoodMenu() {
  const [foods, setFoods] = useFood([]);

  console.log(foods);
  return (
    <div>

      <div>
        <Divider orientation="left">Foods</Divider>
        <List

          footer={<div>Footer</div>}
          bordered
          dataSource={foods}
          renderItem={(item) => {

            return (
              <>
                <List.Item className="listItems">
                  <Row className="rows">
                    <Col
                      className="cols"
                      xs={{ span: 11, offset: 1 }}
                      lg={{ span: 1, offset: 2 }}
                    >
                      {item.price}
                    </Col>
                    <Col
                      className="cols"
                      xs={{ span: 5, offset: 1 }}
                      lg={{ span: 1, offset: 2 }}
                    >
                      {item.discount}
                    </Col>
                    <Col
                      className="cols"
                      xs={{ span: 5, offset: 1 }}
                      lg={{ span: 1, offset: 2 }}
                    >
                      {item.name}
                    </Col>
                    <Col
                      className="cols"
                      xs={{ span: 5, offset: 1 }}
                      lg={{ span: 1, offset: 2 }}
                    >
                      {item.ingredients}
                    </Col>
                    <Col
                      className="cols"
                      xs={{ span: 5, offset: 1 }}
                      lg={{ span: 1, offset: 2 }}
                    >
                      {item.stock}
                    </Col>

                  </Row>
                </List.Item>
              </>
            );
          }}
        />
      </div>
    </div>
  );
}
