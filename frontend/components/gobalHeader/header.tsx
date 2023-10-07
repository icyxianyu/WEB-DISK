import { useRouter } from "next/router"
import { useCallback } from "react"
import { Layout, Space } from 'antd';
import styled from "styled-components";
import AvatarContent from "./Avatar";
import Upload from "./Upload";
const { Header } = Layout;

const StyledHeader = styled(Header)`
    box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
    z-index:2;
    display: flex;
    justify-content: flex-end;
    `;

export default function HeaderContainer() {
    const router = useRouter()

    const clickHandle = useCallback(() => {
        router.push("/test")
    }, [])

    return (
        <StyledHeader>
            <Space>
                <Upload />
                <AvatarContent />
            </Space>
        </StyledHeader>
    )
}