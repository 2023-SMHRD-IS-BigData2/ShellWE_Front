import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  Text
} from "components";

const DesktopOnePage = () => {
  return (
    <>
      <div className="bg-light_blue-800 flex flex-col font-inter items-center justify-start mx-auto pr-1 py-1 w-full">
        <div
          className="flex flex-col gap-[15px] items-center justify-start max-w-[1427px] mb-1.5 mx-auto md:px-5 w-full">
          <div className="md:h-[281px] h-[388px] sm:h-[874px] relative w-full">
            <div
              className="absolute md:h-[281px] h-[381px] sm:h-[874px] inset-[0] justify-center m-auto w-full">
              <div
                className="absolute bottom-[0] h-72 md:h-[281px] sm:h-[874px] left-[0] w-1/2 md:w-full">
                <div
                  className="absolute bg-blue_gray-100 h-[281px] inset-[0] justify-center m-auto rounded-[10px] w-full"></div>
                <div
                  className="absolute bg-white-A700 flex flex-col h-max inset-[0] items-center justify-center m-auto p-[7px] rounded-[10px] w-full">
                  <div className="flex flex-col items-start justify-start mb-[21px] mt-8 w-full">
                    <div
                      className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-1 md:ml-[0] w-[84%] md:w-full">
                      <Text
                        className="mb-1 text-[22px] text-gray-900_75 sm:text-lg md:text-xl"
                        size="txtInterBlack22">
                        환자
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[62px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtInterBlack22Black900">
                        120 병동 11호 01
                      </Text>
                      <Text
                        className="ml-16 sm:ml-[0] sm:mt-0 mt-1 text-[22px] text-black-900_75 sm:text-lg md:text-xl"
                        size="txtInterBlack22Black90075">
                        이름
                      </Text>
                      <Text
                        className="ml-32 sm:ml-[0] sm:mt-0 mt-1 text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtInterBlack22Black900">
                        노은평
                      </Text>
                    </div>
                    <div
                      className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-[19px] w-4/5 md:w-full">
                      <Text
                        className="sm:mt-0 mt-[17px] text-[22px] text-black-900_75 sm:text-lg md:text-xl"
                        size="txtInterBlack22Black90075">
                        최근 입원
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[25px] sm:mt-0 mt-[17px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtInterBlack22Black900">
                        2020-09-17
                      </Text>
                      <Text
                        className="mb-[17px] sm:ml-[0] ml-[89px] text-[22px] text-black-900_75 sm:text-lg md:text-xl"
                        size="txtInterBlack22Black90075">
                        나이
                      </Text>
                      <Text
                        className="mb-3.5 sm:ml-[0] ml-[129px] sm:mt-0 mt-[3px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtInterBlack22Black900">
                        24
                      </Text>
                    </div>
                    <div
                      className="flex flex-row items-center justify-between md:ml-[0] ml-[341px] mt-0.5 w-[29%] md:w-full">
                      <Text
                        className="text-[22px] text-black-900_84 sm:text-lg md:text-xl"
                        size="txtInterBlack22Black90084">
                        성별
                      </Text>
                      <Text
                        className="text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtInterBlack22Black900">
                        M
                      </Text>
                    </div>
                    <div
                      className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start mt-0.5 w-full">
                      <Text
                        className="mb-4 text-[22px] text-black-900_75 sm:text-lg md:text-xl"
                        size="txtInterBlack22Black90075">
                        위험분류
                      </Text>
                      <Text
                        className="mb-4 sm:ml-[0] ml-[29px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtInterBlack22Black900">
                        고위험
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[167px] sm:mt-0 mt-4 text-[22px] text-black-900_84 sm:text-lg md:text-xl"
                        size="txtInterBlack22Black90084">
                        생년월일
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[88px] sm:mt-0 mt-[15px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtInterBlack22Black900">
                        2001년11월03일
                      </Text>
                    </div>
                    <div
                      className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start ml-1 md:ml-[0] mt-[18px] w-[84%] md:w-full">
                      <Text
                        className="text-[22px] text-black-900_75 sm:text-lg md:text-xl"
                        size="txtInterBlack22Black90075">
                        주치과
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[49px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtInterBlack22Black900">
                        MD 1
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[172px] text-[22px] text-black-900_84 sm:text-lg md:text-xl"
                        size="txtInterBlack22Black90084">
                        담당의사
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[84px] text-[22px] text-black-900 sm:text-lg md:text-xl"
                        size="txtInterBlack22Black900">
                        이재환
                      </Text>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="absolute bg-white-A700 bottom-[0] flex flex-col items-start justify-start p-1.5 right-[0] rounded-[10px] w-1/2">
                <div
                  className="flex flex-col md:gap-10 gap-[95px] items-center justify-start mb-[7px] mt-0.5 w-[94%] md:w-full">
                  <div className="flex flex-col items-start justify-start w-[97%] md:w-full">
                    <Text className="text-black-900 text-xl" size="txtInterBlack20">
                      메모
                    </Text>
                    <div
                      className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[3px] mt-[9px] w-[95%] md:w-full">
                      <Text className="text-base text-black-900_75" size="txtInterBlack16">
                        일자
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[113px] text-base text-black-900_75"
                        size="txtInterBlack16">
                        내용
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[206px] text-base text-black-900_84"
                        size="txtInterBlack16Black90084">
                        작성자
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[115px] text-base text-black-900_75"
                        size="txtInterBlack16">
                        생성일
                      </Text>
                    </div>
                    <div
                      className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[3px] mt-3.5 w-full">
                      <Text
                        className="sm:mt-0 mt-1 text-base text-black-900"
                        size="txtInterBlack16Black900">
                        2024-01-18
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[45px] text-base text-black-900"
                        size="txtInterBlack16Black900">
                        다음주 퇴원 예정
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[127px] text-base text-black-900"
                        size="txtInterBlack16Black900">
                        이재환
                      </Text>
                      <Text
                        className="mb-1 sm:ml-[0] ml-[88px] text-base text-black-900"
                        size="txtInterBlack16Black900">
                        2024-01-08
                      </Text>
                    </div>
                    <div
                      className="flex sm:flex-col flex-row sm:gap-5 items-start justify-start md:ml-[0] ml-[3px] mt-[11px] w-full">
                      <Text
                        className="sm:mt-0 mt-1 text-base text-black-900"
                        size="txtInterBlack16Black900">
                        2024-01-15
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[45px] text-base text-black-900"
                        size="txtInterBlack16Black900">
                        점점 상태 호전 중
                      </Text>
                      <Text
                        className="sm:ml-[0] ml-[123px] text-base text-black-900"
                        size="txtInterBlack16Black900">
                        이재환
                      </Text>
                      <Text
                        className="mb-1 sm:ml-[0] ml-[88px] text-base text-black-900"
                        size="txtInterBlack16Black900">
                        2024-03-27
                      </Text>
                    </div>
                  </div>
                  <Input
                    name="groupFour"
                    placeholder="메모를 작성해주세요"
                    className="font-black italic leading-[normal] p-0 placeholder:text-black-900 text-base text-left w-full"
                    wrapClassName="border border-black-900 border-solid w-[97%]"></Input>
                </div>
              </div>
              <div
                className="absolute bg-white-A700 flex flex-col inset-x-[0] items-end justify-start mx-auto p-[13px] rounded-[10px] top-[0] w-full">
                <div className="flex flex-col items-center justify-start my-[15px]">
                  <Text
                    className="text-[15px] text-black-900 text-center"
                    size="txtInterRegular15">
                    직급[정호준] 로그아웃
                  </Text>
                </div>
              </div>
            </div>
            <div className="absolute h-px right-[0] top-[36%] w-[49%] md:w-full">
              <Line className="bg-black-900 h-px m-auto w-full" />
              <Line
                className="absolute bg-black-900 h-px inset-[0] justify-center m-auto w-full" />
            </div>
            <Img
              className="absolute h-[116px] left-[0] object-cover top-[0] w-[10%]"
              src="images/img_image1.png"
              alt="imageOne" />
          </div>
          <div
            className="flex md:flex-col flex-row gap-[15px] items-center justify-between w-[99%] md:w-full">
            <div
              className="bg-white-A700 flex flex-col gap-[52px] justify-start p-2.5 rounded-[10px] w-[15%] md:w-full">
              <div
                className="bg-light_blue-800 flex flex-col gap-[5px] items-center justify-start mt-3.5 p-[11px] rounded-[20px]">
                <Text
                  className="text-[22px] sm:text-lg text-white-A700 md:text-xl"
                  size="txtInterBlack22WhiteA700">
                  Sepsis score
                </Text>
                <Text
                  className="mb-1 sm:text-[40px] md:text-[46px] text-[50px] text-white-A700"
                  size="txtInterBlack50">
                  62
                </Text>
              </div>
              <div
                className="flex flex-col items-start justify-start mb-[49px] md:ml-[0] ml-[15px]">
                <Text className="text-black-900 text-lg" size="txtInterBlack18">
                  HR
                </Text>
                <Text className="mt-[33px] text-black-900 text-lg" size="txtInterBlack18">
                  O2Sat
                </Text>
                <Text className="mt-[47px] text-black-900 text-lg" size="txtInterBlack18">
                  SBP
                </Text>
                <Text className="mt-[50px] text-black-900 text-lg" size="txtInterBlack18">
                  DBP
                </Text>
                <Text className="mt-[45px] text-black-900 text-lg" size="txtInterBlack18">
                  RESP
                </Text>
                <Text className="mt-[41px] text-black-900 text-lg" size="txtInterBlack18">
                  Temp
                </Text>
              </div>
            </div>
            <div
              className="bg-white-A700 flex flex-col items-center justify-start p-[7px] rounded-[10px] w-[85%] md:w-full">
              <div className="flex flex-col items-end justify-start w-[99%] md:w-full">
                <div className="flex flex-row gap-2 items-center justify-end w-[22%] md:w-full">
                  <Button
                    className="cursor-pointer font-black italic leading-[normal] min-w-[85px] text-base text-center">
                    PDF출력
                  </Button>
                  <Img
                    className="h-[22px] md:h-auto object-cover w-[7%]"
                    src="images/img_image3.png"
                    alt="imageThree" />
                  <Text
                    className="bg-blue_gray-100 h-8 justify-center pl-[5px] pr-2 py-[7px] rounded-[10px] text-black-900_a8 text-sm w-[131px]"
                    size="txtInterBlack14">
                    2021년, 6월, 22일
                  </Text>
                </div>
                <div className="flex flex-col gap-[11px] items-center justify-start w-full">
                  <Img
                    className="h-[293px] md:h-auto object-cover w-full"
                    src="images/img_image4.png"
                    alt="imageFour" />
                  <div
                    className="border border-black-900_33 border-solid flex flex-col items-center justify-start w-full">
                    <List
                      className="flex flex-col gap-px items-center w-full"
                      orientation="vertical">
                      <div
                        className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly my-0 w-full">
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                      </div>
                      <div
                        className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly my-0 w-full">
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                      </div>
                      <div
                        className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly my-0 w-full">
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                      </div>
                      <div
                        className="flex flex-1 sm:flex-col flex-row sm:gap-5 items-center justify-evenly my-0 w-full">
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                        <div className="h-16 w-[15%]"></div>
                      </div>
                    </List>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div >
    </>
  );
};

export default DesktopOnePage;
