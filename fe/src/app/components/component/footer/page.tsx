export default function Footer() {
  return (
    <div className="  xl:space-x-[30px] xl:flex justify-between border-t-[1px] border-[#ccc] xl:px-[150px] lg:px-[40px] px-[5px] py-[20px]  sm:text-[15px] text-[12px]">
      <ul className="space-y-[10px] flex-1">
        <li className="font-bold border-b-[2px] dark:border-white">
          THÔNG TIN LIÊN HỆ
        </li>
        <li>Địa chỉ: Số 19, Ngõ 453, Đường Nguyễn Trãi, Thành Phố Hà Nội</li>
        <li>Điện thoại: (0123) 456-7890 </li>
        <li>Email: support@congtylaptop.vn</li>
      </ul>
      <ul className="space-y-[10px] flex-1 sm:mt-0 mt-[20px]">
        <li className="font-bold border-b-[2px] dark:border-white">
          THÔNG TIN VỀ SHOP
        </li>
        <li>
          <i className="bx bxs-map-pin mr-3"></i> Vị trí bằng google map
        </li>
        <li></li>
        <li>Giờ làm việc: Thứ Hai - Thứ Sáu: 8:00 - 18:00</li>
        <li>Thứ Bảy: 9:00 - 16:00 | Chủ Nhật: Nghỉ</li>
      </ul>
      <ul className="space-y-[10px] flex-1 sm:mt-0 mt-[20px]">
        <li className="font-bold border-b-[2px] dark:border-white">
          HỖ TRỢ KHÁCH HÀNG
        </li>
        <li>Thông tin bảo hành của Shop</li>
        <li>Link FB hỗ trợ khách hàng</li>
      </ul>
    </div>
  );
}
