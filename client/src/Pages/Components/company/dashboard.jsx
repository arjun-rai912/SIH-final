import React from "react";
import {gsap} from "gsap";
import {useEffect, useRef, useState} from "react";
import companyModule from "../../../Assets/styles/company.module.css";
import jobImg from "../../../Assets/Images/company/apple.png";
<<<<<<< HEAD
import flowerPic from '../../../Assets/Images/company/70.png';
export function Dashboard() {
  const [show, setShow] = useState(false);
  const [hiddenClass, sethiddenClass] = useState(false);
  const [edit, setEdit] = useState(false);

  const editClick = () => {
    edit ? setEdit(false) : setEdit(true);
  };
  const on_Click = () => {
    show ? setShow(false) : setShow(true);
    hiddenClass ? sethiddenClass(false) : sethiddenClass(true);
  };
=======
import {useQuery} from "@apollo/client";
import {getcompanyJob} from "../../../graphql/queries";
>>>>>>> a3b661f48c4993a98f7c0431fc2c03c1a639617e

export function Dashboard() {

    const {data} = useQuery(getcompanyJob, {
        variables: {
            id: '62edfdbce7f3ad179a887dd6'
        }
<<<<<<< HEAD
      );
  });
  return (
    <div className={companyModule.categoryContainer} ref={boxRef}>
      <div className={companyModule.h_sub_heading}>
        <img src={flowerPic} alt="" />
        <div className={companyModule.h_sub_heading1}>
          Number of jobs posted
        </div>
        <div className={companyModule.h_sub_heading2}>70/100</div>
      </div>

      <div className={companyModule.posts}>
        <div
          className={
            edit
              ? companyModule.searchEditContainerWithDelete
              : companyModule.searchEditContainer
          }
        >
          <div
            className={
              edit ? companyModule.deleteDivActive : companyModule.deleteDiv
            }
          >
            <button
              onClick={() => {
                handleDeleteAll();
              }}
              className={
                edit ? companyModule.deleteBtnActive : companyModule.deleteBtn
              }
            >
              delete
            </button>
          </div>

          <div className={companyModule.editBtnDiv}>
            <button
              className={
                edit ? companyModule.editBtnWithDelete : companyModule.editBtn
              }
              onClick={editClick}
            >
              edit
            </button>
          </div>

          <div
            className={
              edit
                ? companyModule.searchBarContainerWithDelete
                : companyModule.searchBarContainer
            }
          >
            <div className={companyModule.searchBar}>
              <i className="fas fa-search" />
              <input
                type="text"
                placeholder="Search by company, job title keyword"
              />
              <i className={`fas fa-sliders-h ${companyModule.h_sort}`} />
            </div>
          </div>
        </div>
        <div className={companyModule.tableHeading}>
          <div className={companyModule.tableHeading1}>Jobs</div>
          <div className={companyModule.tableHeading2}>Date posted</div>
          <div className={companyModule.tableHeading3}>
            Number of people applied
          </div>
          <div className={companyModule.tableHeading4}>Report</div>
        </div>
        <div className={companyModule.line1}></div>

        <div
          className={
            hiddenClass
              ? `${companyModule.categoryCardHidden} categoryCard`
              : `${companyModule.categoryCard} categoryCard`
          }
        >
          <input
            type="checkbox"
            className={
              edit ? companyModule.editCheckBox : companyModule.checkBox
            }
            id={companyModule.checkbox1}
          />
          <div className={companyModule.job}>
            <div className={companyModule.dropdownBtnDiv}>
              <i
                class="zmdi zmdi-chevron-down "
                className={companyModule.dropdownBtn}
                onClick={on_Click}
                style={{ display: edit ? "none" : "" }}
              ></i>{" "}
              {show ? results() : null}
            </div>

            <div className={companyModule.jobImgDiv}>
              <img src={jobImg} alt="" className={companyModule.jobImg1} />
            </div>

            <div>
              <div className={companyModule.jobNameDiv}>
                <p>Job Name</p>
              </div>
              <div className={companyModule.jobCategoryDiv}>
                <p>Category</p>
              </div>
            </div>
          </div>

          <div className={companyModule.datePostedDiv}>
            <p>19 June 2022</p>
          </div>

          <div className={companyModule.appliedNumberDiv}>
            <p>300 people</p>
          </div>

          <div className={companyModule.downloadBtnDiv}>
            <button className={companyModule.downloadBtn}>Download</button>
          </div>
        </div>

        <div className={companyModule.line2}></div>

        <div
          className={
            hiddenClass
              ? `${companyModule.categoryCardHidden} categoryCard`
              : `${companyModule.categoryCard} categoryCard`
          }
        >
          <input
            type="checkbox"
            className={
              edit ? companyModule.editCheckBox : companyModule.checkBox
            }
            id={companyModule.checkbox2}
          />

          <div className={companyModule.job}>
            <div className={companyModule.dropdownBtnDiv}>
              <i
                class="zmdi zmdi-chevron-down"
                onClick={on_Click}
                className={companyModule.dropdownBtn}
                style={{ display: edit ? "none" : "" }}
              ></i>{" "}
              {show ? results() : null}
            </div>

            <div className={companyModule.jobImgDiv}>
              <img src={jobImg} alt="" className={companyModule.jobImg1} />
=======
    });

    const [show, setShow] = useState(false);
    const [popup, setPop] = useState(-1);
    const [hiddenClass, sethiddenClass] = useState(false);
    const [edit, setEdit] = useState(false);

    const editClick = () => {
        edit ? setEdit(false) : setEdit(true);
    };
    const on_Click = () => {
        show ? setShow(false) : setShow(true);
        hiddenClass ? sethiddenClass(false) : sethiddenClass(true);
    };

    const results = (data, index) => (
        <div className={companyModule.hiddenElement}>
            <div className={companyModule.hidden1}>
                <h3 className={companyModule.hidden1Heading}>Job Description</h3>
                <p className={companyModule.hidden1Para}>
                    {data.jobDescription}
                </p>
            </div>
            <div className={companyModule.hiddenLine}></div>
            <div className={companyModule.hidden2}>
                <h3 className={companyModule.hidden2Heading}>Deadline</h3>
                <p className={companyModule.hidden2Para}>{Date(data.ApplicationDeadline)}</p>
>>>>>>> a3b661f48c4993a98f7c0431fc2c03c1a639617e
            </div>
        </div>
    );

    const handleDeleteAll = () => {
    };
    const boxRef = useRef();
    const q = gsap.utils.selector(boxRef);
    const tl = useRef();
    useEffect(() => {
        tl.current = gsap
            .timeline({
                stagger: 0.5,
            })
            .fromTo(
                q(".categoryCard"),
                {
                    y: 100,
                    stagger: 0.8,
                },
                {
                    y: 0,
                    stagger: 0.2,
                }
            );
    });
    return (
        <div className={companyModule.categoryContainer} ref={boxRef}>
            <div className={companyModule.h_sub_heading}>
                <div className={companyModule.h_sub_heading1}>
                    Number of jobs posted
                </div>
                <div className={companyModule.h_sub_heading2}>70/100</div>
            </div>

            <div className={companyModule.posts}>
                <div
                    className={
                        edit
                            ? companyModule.searchEditContainerWithDelete
                            : companyModule.searchEditContainer
                    }
                >
                    <div
                        className={
                            edit ? companyModule.deleteDivActive : companyModule.deleteDiv
                        }
                    >
                        <button
                            onClick={() => {
                                handleDeleteAll();
                            }}
                            className={
                                edit ? companyModule.deleteBtnActive : companyModule.deleteBtn
                            }
                        >
                            delete
                        </button>
                    </div>

                    <div className={companyModule.editBtnDiv}>
                        <button
                            className={
                                edit ? companyModule.editBtnWithDelete : companyModule.editBtn
                            }
                            onClick={editClick}
                        >
                            edit
                        </button>
                    </div>

                    <div
                        className={
                            edit
                                ? companyModule.searchBarContainerWithDelete
                                : companyModule.searchBarContainer
                        }
                    >
                        <div className={companyModule.searchBar}>
                            <i className="fas fa-search"/>
                            <input
                                type="text"
                                placeholder="Search by company, job title keyword"
                            />
                            <i className={`fas fa-sliders-h ${companyModule.h_sort}`}/>
                        </div>
                    </div>
                </div>
                <div className={companyModule.tableHeading}>
                    <div className={companyModule.tableHeading1}>Jobs</div>
                    <div className={companyModule.tableHeading2}>Date posted</div>
                    <div className={companyModule.tableHeading3}>
                        Number of people applied
                    </div>
                    <div className={companyModule.tableHeading4}>Report</div>
                </div>
                <div className={companyModule.line1}></div>
                {(data) ? data.companyJobs.map((data, index) => <div key={index}>
                    <div
                        className={
                            popup === index
                                ? `${companyModule.categoryCardHidden} categoryCard`
                                : `${companyModule.categoryCard} categoryCard`
                        }
                    >
                        <input
                            type="checkbox"
                            className={
                                edit ? companyModule.editCheckBox : companyModule.checkBox
                            }
                            id={companyModule.checkbox1}
                        />
                        <div className={companyModule.job}>
                            <div className={companyModule.dropdownBtnDiv}>
                                <i
                                    className={`zmdi zmdi-chevron-down ${companyModule.dropdownBtn}`}
                                    onClick={() => {
                                        setPop(index)
                                    }}
                                    style={{display: edit ? "none" : ""}}
                                />{" "}
                                {popup === index ? results(data, index) : null}
                            </div>

                            <div className={companyModule.jobImgDiv}>
                                <img src={data.jobProfile} alt="" className={companyModule.jobImg1}/>
                            </div>

                            <div>
                                <div className={companyModule.jobNameDiv}>
                                    <p>{data.jobTitle}</p>
                                </div>
                                <div className={companyModule.jobCategoryDiv}>
                                    <p>{data.jobCategory}</p>
                                </div>
                            </div>
                        </div>

                        <div className={companyModule.datePostedDiv}>
                            <p>19 June 2022</p>
                        </div>

                        <div className={companyModule.appliedNumberDiv}>
                            <p>300 people</p>
                        </div>

                        <div className={companyModule.downloadBtnDiv}>
                            <button className={companyModule.downloadBtn}>Download</button>
                        </div>
                    </div>

                    <div className={companyModule.line2}></div>
                </div>) : ''}
            </div>
        </div>
    );
}
