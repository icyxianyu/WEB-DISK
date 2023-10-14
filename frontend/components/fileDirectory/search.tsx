import React from 'react';
import { Input } from 'antd';
const { Search } = Input;

const SearchComponent: React.FC = () => (
    <Search 
        placeholder="搜索文件"
        style={{ maxWidth: 200 }} />
);

export default SearchComponent;