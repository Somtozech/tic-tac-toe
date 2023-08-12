export const XSVG = ({height = "200", width = "200"}) => {
  return (
    <svg width={height} height={width} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M167.22 10.7931C140.809 41.8525 109.367 77.3545 107.986 77.6745C107.467 77.7938 100.925 72.3186 93.4469 65.5058C85.9688 58.6939 77.1736 50.9949 73.902 48.3978C70.6304 45.8007 65.0856 40.9552 61.5802 37.6293C58.0749 34.3033 54.2509 31.0865 53.0825 30.4821L50.958 29.3817L52.6576 31.321L54.3571 33.2604L52.6134 32.3512C51.6548 31.8509 48.1886 28.9677 44.9102 25.944C41.4346 22.7391 38.5445 20.6964 37.9768 21.0452C37.365 21.4219 39.062 23.4772 42.5563 26.5899C46.5417 30.1418 47.8478 31.7951 47.1867 32.4537C46.5256 33.1123 44.764 31.8882 40.9409 28.1136C38.0125 25.2219 35.1709 22.8559 34.627 22.8559C32.8119 22.8559 32.5043 24.6361 34.0288 26.3156C36.2178 28.7239 34.4103 30.3924 31.5993 28.558C30.3424 27.7377 29.1298 27.5092 28.4033 27.957C27.4447 28.547 27.5348 29.016 28.8978 30.5346L30.5634 32.3919L26.9858 30.5863C25.0177 29.5941 22.4234 28.7815 21.2201 28.7815C19.2435 28.7815 19.1262 28.9576 20.01 30.6032C20.8776 32.2183 20.8097 32.3504 19.4024 31.7688C14.2553 29.6407 13.1421 29.3486 12.5379 29.97C11.6431 30.8893 25.5574 44.1025 59.6759 74.7328L87.9395 100.105L84.3568 104.018C63.069 127.27 35.6493 153.79 12.0672 173.938C5.16527 179.833 -0.260557 185.013 0.00967212 185.448C0.688644 186.542 3.45297 184.963 8.11994 180.812C10.2639 178.905 14.3998 175.684 17.3103 173.655C22.3155 170.163 22.6265 170.06 23.0701 171.75C23.3275 172.732 23.7201 173.535 23.9419 173.535C24.1637 173.535 25.9083 172.202 27.8195 170.573C31.9579 167.044 32.4839 166.966 33.5376 169.726C34.6049 172.522 35.9484 172.396 40.3239 169.091C47.3958 163.748 50.2493 162.219 49.5415 164.151C49.3859 164.576 46.6471 167.651 43.4554 170.983C39.9228 174.671 37.8341 177.516 38.1171 178.252C38.7892 179.996 43.2421 179.746 47.185 177.743C50.1252 176.248 50.6317 176.193 51.0659 177.319C51.3404 178.031 51.9395 178.615 52.3976 178.615C52.8556 178.615 59.4108 172.934 66.9653 165.99C79.8725 154.126 97.1561 136.111 106.25 125.045C108.462 122.352 110.565 120.257 110.923 120.389C111.279 120.52 123.937 131.255 139.05 144.245C155.276 158.192 173.196 174.542 182.811 184.176C191.768 193.148 199.32 200.266 199.594 199.992C200.605 198.986 199.984 197.95 194.775 191.943C184.094 179.626 183.433 178.615 186.073 178.615C188.198 178.615 187.512 176.567 184.373 173.535C180.991 170.27 180.651 168.848 183.098 168.211C185.905 167.48 185.053 164.926 180.124 159.296C177.554 156.36 175.45 153.791 175.45 153.588C175.45 152.488 177.418 153.613 181.095 156.817C187.842 162.697 190.383 164.247 191.484 163.15C192.931 161.709 192.649 159.074 190.651 155.361C189.145 152.563 189.028 151.75 189.92 150.327C190.868 148.816 190.609 148.298 187.572 145.633C185.696 143.985 177.899 137.092 170.245 130.314C156.919 118.512 140.344 104.591 133.612 99.5458L130.438 97.168L132.762 94.4253C134.04 92.9168 138.793 87.6202 143.324 82.6537C147.855 77.688 155.311 68.9689 159.894 63.2778C164.477 57.5867 170.266 50.6529 172.757 47.8678C175.249 45.0837 177.66 42.0311 178.115 41.0839C178.927 39.3968 178.917 39.3951 177.621 41.006C176.762 42.0751 176.3 42.2504 176.3 41.508C176.3 40.212 181.922 32.7169 185.183 29.6652C186.373 28.5512 187.334 26.8489 187.319 25.883C187.292 24.2196 187.199 24.2382 185.586 26.2419C179.113 34.2728 176.886 36.4763 176.066 35.6594C175.044 34.6411 175.684 33.6337 181.769 26.6762C185.137 22.8271 185.723 21.7275 184.743 21.1036C183.884 20.5559 183.081 20.8556 182.031 22.1143C180.823 23.561 180.302 23.7049 179.292 22.8703C178.197 21.9654 178.206 21.5269 179.369 19.2878C181.065 16.0211 179.68 14.1927 177.673 17.0471C176.236 19.0906 175.763 17.8572 177.038 15.393C177.444 14.6091 178.041 12.5056 178.365 10.7194C178.922 7.64826 178.852 7.5035 177.073 8.06559C175.483 8.56926 175.29 8.41689 175.819 7.08109C176.733 4.77434 177.452 0 176.885 0C176.617 0 172.268 4.8573 167.22 10.7931Z"
        fill="#CC1300"
      />
    </svg>
  );
};
export const OSVG = ({height = "200", width = "200"}) => (
  <svg width={height} height={width} viewBox="0 0 200 200" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M107.483 11.0865L108.114 11.0888C132.493 11.7689 152.829 21.1155 169.122 39.1285C184.677 58.0257 190.923 80.1677 187.86 105.555C183.356 131.199 171.751 151.3 153.047 165.855C131.618 181.622 107.978 189.772 82.1288 190.305C68.1223 190.238 56.2592 187.038 46.5393 180.707C63.2364 186.931 78.743 187.043 93.0589 181.044C74.2819 181.094 61.3689 179.318 54.3199 175.716C43.6693 171.685 34.546 164.139 26.95 153.076C13.5828 131.183 8.6401 108.254 12.122 84.2896C14.2303 65.3475 24.8595 48.314 44.0094 33.1889C64.1925 18.7127 85.3505 11.3452 107.483 11.0865ZM107.445 0L106.251 0.00725474C77.4903 1.63349 53.1981 10.7681 33.3739 27.4111C13.0518 44.7611 2.07911 64.7958 0.455786 87.5153C-1.83651 115.591 4.51772 139.768 19.5185 160.047C23.2582 164.908 27.3206 168.978 31.7056 172.257C33.6886 175.813 36.0862 179.046 38.8985 181.957C43.2472 186.165 47.0966 189.128 50.4465 190.846C62.0847 196.986 74.2665 200.037 86.9919 200C116.143 199.426 141.915 189.748 164.309 170.964C184.341 152.79 195.98 130.672 199.225 104.611C202.519 78.5414 195.311 54.3178 177.599 31.9405C158.938 11.2059 135.554 0.559061 107.445 0Z"
      fill="#01A2FE"
    />
  </svg>
);

export const StarIcon = ({height = "40", width = "40", color = "#c7c7c7"}) => (
  <svg
    width={height}
    height={width}
    version="1.1"
    id="Capa_1"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 47.94 47.94"
  >
    <path
      fill={color}
      d="M26.285,2.486l5.407,10.956c0.376,0.762,1.103,1.29,1.944,1.412l12.091,1.757
	c2.118,0.308,2.963,2.91,1.431,4.403l-8.749,8.528c-0.608,0.593-0.886,1.448-0.742,2.285l2.065,12.042
	c0.362,2.109-1.852,3.717-3.746,2.722l-10.814-5.685c-0.752-0.395-1.651-0.395-2.403,0l-10.814,5.685
	c-1.894,0.996-4.108-0.613-3.746-2.722l2.065-12.042c0.144-0.837-0.134-1.692-0.742-2.285l-8.749-8.528
	c-1.532-1.494-0.687-4.096,1.431-4.403l12.091-1.757c0.841-0.122,1.568-0.65,1.944-1.412l5.407-10.956
	C22.602,0.567,25.338,0.567,26.285,2.486z"
    />
  </svg>
);

export const CloseIcon = ({height = "30", width = "30"}) => (
  <svg width={width} height={height} version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 50 50">
    <circle fill="#c20808" cx="25" cy="25" r="25" />
    <polyline
      fill="none"
      stroke="#FFFFFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeMiterlimit={10}
      points="16,34 25,25 34,16 
	"
    />
    <polyline
      stroke="#FFFFFF"
      strokeWidth={2}
      strokeLinecap="round"
      strokeMiterlimit={10}
      points="16,16 25,25 34,34 
	"
    />
  </svg>
);

export const CopyIcon = ({height = "30", width = "30"}) => (
  <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.53 8L14 2.47C13.8595 2.32931 13.6688 2.25018 13.47 2.25H11C10.2707 2.25 9.57118 2.53973 9.05546 3.05546C8.53973 3.57118 8.25 4.27065 8.25 5V6.25H7C6.27065 6.25 5.57118 6.53973 5.05546 7.05546C4.53973 7.57118 4.25 8.27065 4.25 9V19C4.25 19.7293 4.53973 20.4288 5.05546 20.9445C5.57118 21.4603 6.27065 21.75 7 21.75H14C14.7293 21.75 15.4288 21.4603 15.9445 20.9445C16.4603 20.4288 16.75 19.7293 16.75 19V17.75H17C17.7293 17.75 18.4288 17.4603 18.9445 16.9445C19.4603 16.4288 19.75 15.7293 19.75 15V8.5C19.7421 8.3116 19.6636 8.13309 19.53 8ZM14.25 4.81L17.19 7.75H14.25V4.81ZM15.25 19C15.25 19.3315 15.1183 19.6495 14.8839 19.8839C14.6495 20.1183 14.3315 20.25 14 20.25H7C6.66848 20.25 6.35054 20.1183 6.11612 19.8839C5.8817 19.6495 5.75 19.3315 5.75 19V9C5.75 8.66848 5.8817 8.35054 6.11612 8.11612C6.35054 7.8817 6.66848 7.75 7 7.75H8.25V15C8.25 15.7293 8.53973 16.4288 9.05546 16.9445C9.57118 17.4603 10.2707 17.75 11 17.75H15.25V19ZM17 16.25H11C10.6685 16.25 10.3505 16.1183 10.1161 15.8839C9.8817 15.6495 9.75 15.3315 9.75 15V5C9.75 4.66848 9.8817 4.35054 10.1161 4.11612C10.3505 3.8817 10.6685 3.75 11 3.75H12.75V8.5C12.7526 8.69811 12.8324 8.88737 12.9725 9.02747C13.1126 9.16756 13.3019 9.24741 13.5 9.25H18.25V15C18.25 15.3315 18.1183 15.6495 17.8839 15.8839C17.6495 16.1183 17.3315 16.25 17 16.25Z"
      fill="#434c54"
    />
  </svg>
);