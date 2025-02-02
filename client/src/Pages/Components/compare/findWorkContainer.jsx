import compareStyle from "../../../Assets/styles/compare.module.css";
import {getJob} from "../../../graphql/queries";
import {useEffect} from "react";
import {useQuery} from "@apollo/client";

export function FindWorkContainer({setJob}) {
    const {data} = useQuery(getJob);
    return (
        <div className={compareStyle.findWorkContainer}>
            {(data) ? data.jobList.map((value, index) =>
                <div className={compareStyle.findWorkCard} onClick={() => setJob(value._id)} key={index}>
                    <div className={compareStyle.fwc_profile}>
                        <img src={value.jobProfile} alt=""/>
                    </div>
                    <div className={compareStyle.fwc_description}>
                        <div className={compareStyle.fwc_heading}>{value.companyName}</div>
                        <div className={"fwc_role"}>{value.jobTitle}</div>
                        <div className={compareStyle.fwc_salary}>
                            <span>${value.SalaryRange}</span>/ a month
                        </div>
                        <div className={compareStyle.fwc_locView}>
                            <div className={"fwc_location"}>
                                <svg
                                    width="10"
                                    height="12"
                                    viewBox="0 0 10 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M5 6.5C5.82843 6.5 6.5 5.82843 6.5 5C6.5 4.17157 5.82843 3.5 5 3.5C4.17157 3.5 3.5 4.17157 3.5 5C3.5 5.82843 4.17157 6.5 5 6.5Z"
                                        stroke="#BDBABA"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                    <path
                                        d="M5 1C3.93913 1 2.92172 1.42143 2.17157 2.17157C1.42143 2.92172 1 3.93913 1 5C1 5.946 1.201 6.565 1.75 7.25L5 11L8.25 7.25C8.799 6.565 9 5.946 9 5C9 3.93913 8.57857 2.92172 7.82843 2.17157C7.07828 1.42143 6.06087 1 5 1V1Z"
                                        stroke="#BDBABA"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                    />
                                </svg>
                                {value.jobLocation}
                            </div>
                            <div className={compareStyle.fwc_views}>
                                <svg
                                    width="12"
                                    height="12"
                                    viewBox="0 0 12 12"
                                    fill="none"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M11.6026 5.8725C11.1615 4.73162 10.3958 3.74498 9.40013 3.03453C8.40444 2.32408 7.22239 1.92096 6.00008 1.875C4.77778 1.92096 3.59573 2.32408 2.60004 3.03453C1.60434 3.74498 0.838645 4.73162 0.397585 5.8725C0.367797 5.95489 0.367797 6.04511 0.397585 6.1275C0.838645 7.26838 1.60434 8.25502 2.60004 8.96547C3.59573 9.67592 4.77778 10.079 6.00008 10.125C7.22239 10.079 8.40444 9.67592 9.40013 8.96547C10.3958 8.25502 11.1615 7.26838 11.6026 6.1275C11.6324 6.04511 11.6324 5.95489 11.6026 5.8725ZM6.00008 9.375C4.01258 9.375 1.91258 7.90125 1.15133 6C1.91258 4.09875 4.01258 2.625 6.00008 2.625C7.98759 2.625 10.0876 4.09875 10.8488 6C10.0876 7.90125 7.98759 9.375 6.00008 9.375Z"
                                        fill="#BDBABA"
                                    />
                                    <path
                                        d="M6 3.75C5.55499 3.75 5.11998 3.88196 4.74997 4.12919C4.37996 4.37643 4.09157 4.72783 3.92127 5.13896C3.75097 5.5501 3.70642 6.0025 3.79323 6.43895C3.88005 6.87541 4.09434 7.27632 4.40901 7.59099C4.72368 7.90566 5.12459 8.11995 5.56105 8.20677C5.99751 8.29358 6.4499 8.24903 6.86104 8.07873C7.27217 7.90843 7.62357 7.62004 7.87081 7.25003C8.11804 6.88002 8.25 6.44501 8.25 6C8.25 5.40326 8.01295 4.83097 7.59099 4.40901C7.16903 3.98705 6.59674 3.75 6 3.75ZM6 7.5C5.70333 7.5 5.41332 7.41203 5.16665 7.2472C4.91997 7.08238 4.72771 6.84811 4.61418 6.57403C4.50065 6.29994 4.47095 5.99834 4.52882 5.70736C4.5867 5.41639 4.72956 5.14912 4.93934 4.93934C5.14912 4.72956 5.41639 4.5867 5.70737 4.52882C5.99834 4.47094 6.29994 4.50065 6.57403 4.61418C6.84812 4.72771 7.08238 4.91997 7.24721 5.16665C7.41203 5.41332 7.5 5.70333 7.5 6C7.5 6.39783 7.34197 6.77936 7.06066 7.06066C6.77936 7.34196 6.39783 7.5 6 7.5Z"
                                        fill="#BDBABA"
                                    />
                                </svg>
                                150 applied
                            </div>
                        </div>
                        <div className={compareStyle.fwc_site}>
                            Upload by Sarkari Results.com
                        </div>
                    </div>
                    <div className={"fwc_bookmark"}>
          <span>
            <svg
                width="49"
                height="56"
                viewBox="0 0 49 56"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
            >
              <path
                  d="M35.1711 5.59998H13.8289C13.0206 5.60102 12.2456 5.96951 11.674 6.62461C11.1025 7.27971 10.7809 8.16792 10.78 9.09438V47.5328C10.78 47.8447 10.8529 48.1509 10.991 48.4196C11.1291 48.6883 11.3275 48.9098 11.5655 49.061C11.8035 49.2121 12.0725 49.2876 12.3445 49.2794C12.6165 49.2712 12.8817 49.1797 13.1124 49.0144L24.4987 40.8572L35.8876 49.0144C36.1184 49.1797 36.3835 49.2712 36.6556 49.2794C36.9276 49.2876 37.1966 49.2121 37.4346 49.061C37.6726 48.9098 37.871 48.6883 38.0091 48.4196C38.1472 48.1509 38.22 47.8447 38.22 47.5328V9.09438C38.2191 8.16792 37.8976 7.27971 37.326 6.62461C36.7544 5.96951 35.9795 5.60102 35.1711 5.59998ZM35.1711 44.3806L25.3065 37.3151C25.0642 37.1416 24.7842 37.0496 24.4985 37.0496C24.2128 37.0496 23.9328 37.1416 23.6905 37.3151L13.8289 44.3804V9.09438H35.1711V44.3806Z"
                  fill="#6083FE"
              />
            </svg>
          </span>
                    </div>
                </div>) : ''}
        </div>
    );
}
