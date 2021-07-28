import React from "react";
import { Table, Tag, Space } from "antd";
import { users } from "./util-data";
import SearchBar from "./components/SearchBar";
import "antd/dist/antd.css";

const { Column } = Table;

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      users: [...users],
      searchWord: "",
    };
  }
  onSearchFilter = (ev) => {
    this.setState({ searchWord: ev.target.value });
  };
  render() {
    const { users, searchWord } = this.state;
    const filteredUsers = users.filter((user) => {
      return user.name.toLowerCase().includes(searchWord.toLowerCase());
    });

    return !users.length ? (
      <h3>Loading users...</h3>
    ) : (
      <div className="App">
        <SearchBar searchChange={this.onSearchFilter} />
        <Table dataSource={filteredUsers}>
          <Column title="Patient name" dataIndex="name" key="name" />
          <Column title="Patient number" dataIndex="number" key="number" />
          <Column title="Prescription date" dataIndex="date" key="date" />
          <Column
            title="Medication name"
            dataIndex="medication"
            key="medication"
            render={(medication) => (
              <>
                {medication.map((drug) => (
                  <Tag color="#fa541c" key={drug}>
                    {drug}
                  </Tag>
                ))}
              </>
            )}
          />
          <Column
            title="Tags"
            dataIndex="tags"
            key="tags"
            render={(tags) => (
              <>
                {tags.map((tag) => (
                  <Tag color="blue" key={tag}>
                    {tag}
                  </Tag>
                ))}
              </>
            )}
          />
          <Column
            title="Action"
            key="action"
            render={(text, record) => (
              <Space size="middle">
                <button>Renew prescription {record.name}</button>
                <button>Delete prescription</button>
              </Space>
            )}
          />
        </Table>
      </div>
    );
  }
}

export default App;
