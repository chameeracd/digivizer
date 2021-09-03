import Data from './data/data.json';
import './App.css';
import moment from 'moment';
import React from 'react';
import DataTable from 'react-data-table-component';

function App() {
  const columns = [
    {
      name: 'Author',
      selector: row => row.node.handle_history.username,
      sortable: true,
      width: '400px'
    },
    {
      name: 'Date',
      selector: row => moment(row.node.date).format('Do MMMM YYYY'),
      sortable: true,
      width: '150px'
    },
    {
      name: 'Post',
      selector: row => row.node.post,
      sortable: false,
      width: '700px'
    },
    {
      name: 'Post Image',
      selector: row => <img src={row.node.image_url} width="100px"/>,
      sortable: false,
      width: '200px'
    },
    {
      name: 'Likes Count',
      selector: row => row.node.likes_count == null ? 0 : row.node.likes_count,
      sortable: true,
      width: '100px'
    },
    {
      name: 'Comments Count',
      selector: row => row.node.comments_count == null ? 0 : row.node.comments_count,
      sortable: true,
      width: '100px'
    },
    {
      name: 'Total Engagement',
      selector: row => row.node.likes_count + row.node.comments_count,
      sortable: true,
      width: '100px'
    },
];


  return (
    <DataTable
        columns={columns}
        data={Data.data.postsConnection.edges}
    />
  );
}

export default App;