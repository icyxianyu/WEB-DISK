import { QRCode } from 'antd';

export default function Qrcode() {
    return <QRCode
        errorLevel="H"
        value="https://ant.design/"
        icon="https://gw.alipayobjects.com/zos/rmsportal/KDpgvguMpGfqaHPjicRK.svg"
    />
}