import React, { useEffect, useState } from "react";
import { userService } from "../../services/userService";
import { List, Row, Col, Divider } from "antd";
export default function Users() {
  const [users, setUsers] = useState([])
  useEffect(() => {
    userService
      .allUser()
      .then((res) => res.json())
      .then((res) => setUsers(res.data))
  }, [])

  console.log(users)
  return (
    <div>
      <Divider orientation="left">Users</Divider>
      <List

        footer={<div></div>}
        bordered
        dataSource={users}
        renderItem={(item) => {
          console.log(item)
          return (
            <>
              <List.Item className="listItems">
                <Row className="rows">


                  <Col
                    className="cols"
                    xs={{ span: 11, offset: 1 }}
                    lg={{ span: 7, offset: 2 }}
                  >

                    {item.name}
                  </Col>
                  <Col
                    className="cols"
                    xs={{ span: 11, offset: 1 }}
                    lg={{ span: 7, offset: 2 }}
                  >

                    {item.email}
                  </Col>
                  <Col
                    className="cols"
                    xs={{ span: 11, offset: 1 }}
                    lg={{ span: 7, offset: 2 }}
                  >

                    {item.phone}
                  </Col>
                  <Col
                    className="cols"
                    xs={{ span: 11, offset: 1 }}
                    lg={{ span: 7, offset: 2 }}
                  >

                    {item.password}
                  </Col>
                  <Col
                    className="cols"
                    xs={{ span: 11, offset: 1 }}
                    lg={{ span: 7, offset: 2 }}
                  >

                    {item.role_id}
                  </Col>
                  <Col
                    className="cols"
                    xs={{ span: 11, offset: 1 }}
                    lg={{ span: 7, offset: 2 }}
                  >

                    {item.address}
                  </Col>


                </Row>
              </List.Item>
            </>
          );
        }}
      />
    </div>



  )
}
