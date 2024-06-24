import qrCode from "../../assets/images/tistasushi-QR.png"
export function QRCode() {
    return (
        <div className="w-1/2 md:w-1/3 lg:w-1/4 mx-auto my-20">
            <img src={qrCode} alt="qr order Tista sushi in halden Norway asian restaurant japanese cuisine" />
        </div>
    )
}