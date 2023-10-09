import { Link } from 'react-router-dom';
import { MenuOutlined } from '@ant-design/icons';

const SideBar = (props) => {
  const { tag, open, onClick, childrenTag } = props;

  return (
    <aside
      className={`${
        open ? 'basis-1/6' : 'basis-1/12'
      } duration-300 bg-white drop-shadow-md justify-between items-center relative`}
      aria-label="Sidebar"
    >
      <div onClick={onClick}>
        {open ? (
          <img
            src="/image/logo.png"
            alt="logo"
            className="h-8 md:h-8 lg:h-16 mx-auto w-[140px] mt-[10px]"
          />
        ) : (
          <div className="w-8 md:w-8 lg:w-16 h-8 md:h-8 lg:h-16 mx-auto text-5xl hover:bg-red-500">
            <MenuOutlined />
          </div>
        )}
      </div>
      <div className="overflow-y-auto max-h-screen mx-auto py-4 px-3 mt-10 rounded dark:bg-gray-800">
        <ul className="space-y-2">
            {/* admin */}
          {/* {user?.role !== 1 && ( */}
            <li>
              <Link
                to="/TKB"
                className={
                  tag !== 'kho'
                    ? 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    : 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-[#e6f4ff]'
                }
              >
                <img
                  src="/image/kho.png"
                  alt="kho"
                  className={`w-4 md:w-4 lg:w-6 ${!open && 'mx-auto'}`}
                />
                {open && (
                  <span className="ml-3 text-xs sm:text-sm md:text-base ">
                    TKB
                  </span>
                )}
              </Link>
              <Link
                to="/Score"
                className={
                  tag !== 'sx'
                    ? 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    : 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-[#e6f4ff]'
                }
              >
                <img
                  src="/image/daily.png"
                  alt="kho"
                  className={`w-4 md:w-4 lg:w-6 ${!open && 'mx-auto'}`}
                />
                {open && (
                  <span className="ml-3 text-xs sm:text-sm md:text-base">
                    Điểm
                  </span>
                )}
              </Link>
              <Link
                to="/request"
                className={
                  tag !== 'yc'
                    ? 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    : 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-[#e6f4ff]'
                }
              >
                <img
                  src="/image/request.png"
                  alt="kho"
                  className={`w-4 md:w-4 lg:w-6 ${!open && 'mx-auto'}`}
                />
                {open && (
                  <span className="ml-3 text-xs sm:text-sm md:text-base">
                    QL GV
                  </span>
                )}
              </Link>
              <Link
                to="/productline"
                className={
                  tag !== 'dsp'
                    ? 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    : 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-[#e6f4ff]'
                }
              >
                <img
                  src="/image/kho.png"
                  alt="dsp"
                  className={`w-4 md:w-4 lg:w-6 ${!open && 'mx-auto'}`}
                />
                {open && (
                  <span className="ml-3 text-xs sm:text-sm md:text-base">
                    QL HS
                  </span>
                )}
              </Link>
            </li>
          {/* )} */}

            {/* GV  */}
          {/* {user.role === 2 && (
            
            <li>
            <Link
                to="/TKB"
                className={
                  tag !== 'kho'
                    ? 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    : 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-[#e6f4ff]'
                }
              >
                <img
                  src="/image/kho.png"
                  alt="kho"
                  className={`w-4 md:w-4 lg:w-6 ${!open && 'mx-auto'}`}
                />
                {open && (
                  <span className="ml-3 text-xs sm:text-sm md:text-base ">
                    TKB
                  </span>
                )}
              </Link>
              <Link
                to="/test"
                className={
                  tag !== 'tk'
                    ? 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    : 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-[#e6f4ff]'
                }
              >
                <img
                  src="/image/kho.png"
                  alt="kho"
                  className={`w-4 md:w-4 lg:w-6 ${!open && 'mx-auto'}`}
                />
                {open && (
                  <span className="ml-3 text-xs sm:text-sm md:text-base">
                    Tạo bài ktra
                  </span>
                )}
              </Link>
              <Link
                to="/TKB"
                className={
                  tag !== 'kho'
                    ? 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    : 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-[#e6f4ff]'
                }
              >
                <img
                  src="/image/kho.png"
                  alt="kho"
                  className={`w-4 md:w-4 lg:w-6 ${!open && 'mx-auto'}`}
                />
                {open && (
                  <span className="ml-3 text-xs sm:text-sm md:text-base ">
                    Group
                  </span>
                )}
              </Link>
            </li>
          )} */}

          {/* HS  */}
          {/* {user.role === 3 && (
            <li>
            <Link
                to="/TKB"
                className={
                  tag !== 'kho'
                    ? 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    : 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-[#e6f4ff]'
                }
              >
                <img
                  src="/image/kho.png"
                  alt="kho"
                  className={`w-4 md:w-4 lg:w-6 ${!open && 'mx-auto'}`}
                />
                {open && (
                  <span className="ml-3 text-xs sm:text-sm md:text-base ">
                    TKB
                  </span>
                )}
              </Link>
              <Link
                to="/TKB"
                className={
                  tag !== 'kho'
                    ? 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    : 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-[#e6f4ff]'
                }
              >
                <img
                  src="/image/kho.png"
                  alt="kho"
                  className={`w-4 md:w-4 lg:w-6 ${!open && 'mx-auto'}`}
                />
                {open && (
                  <span className="ml-3 text-xs sm:text-sm md:text-base ">
                    Group
                  </span>
                )}
              </Link>
              <Link
                to="/test"
                className={
                  tag !== 'tk'
                    ? 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    : 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-[#e6f4ff]'
                }
              >
                <img
                  src="/image/kho.png"
                  alt="kho"
                  className={`w-4 md:w-4 lg:w-6 ${!open && 'mx-auto'}`}
                />
                {open && (
                  <span className="ml-3 text-xs sm:text-sm md:text-base">
                    Làm bài ktra
                  </span>
                )}
              </Link>
            </li>

        )} */}

        {/* PH  */}
          {/* {user.role === 4 && (
            <li>
            <Link
                to="/TKB"
                className={
                  tag !== 'kho'
                    ? 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    : 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-[#e6f4ff]'
                }
              >
                <img
                  src="/image/kho.png"
                  alt="kho"
                  className={`w-4 md:w-4 lg:w-6 ${!open && 'mx-auto'}`}
                />
                {open && (
                  <span className="ml-3 text-xs sm:text-sm md:text-base ">
                    TKB
                  </span>
                )}
              </Link>
              <Link
                to="/TKB"
                className={
                  tag !== 'kho'
                    ? 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    : 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-[#e6f4ff]'
                }
              >
                <img
                  src="/image/kho.png"
                  alt="kho"
                  className={`w-4 md:w-4 lg:w-6 ${!open && 'mx-auto'}`}
                />
                {open && (
                  <span className="ml-3 text-xs sm:text-sm md:text-base ">
                    Group
                  </span>
                )}
              </Link>
              <Link
                to="/test"
                className={
                  tag !== 'tk'
                    ? 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700'
                    : 'flex items-center p-2 text-base font-normal text-gray-900 rounded-lg bg-[#e6f4ff]'
                }
              >
                <img
                  src="/image/kho.png"
                  alt="kho"
                  className={`w-4 md:w-4 lg:w-6 ${!open && 'mx-auto'}`}
                />
                {open && (
                  <span className="ml-3 text-xs sm:text-sm md:text-base">
                    xem điểm
                  </span>
                )}
              </Link>
            </li>
        )}  */}
        </ul>
      </div>
    </aside>
  );
};
export default SideBar;