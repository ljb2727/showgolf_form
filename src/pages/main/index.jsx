import { useState } from "react";
import { Container, Stack, Box } from "@mui/material";
import Select from "../../components/Select";
import TextField from "../../components/TextField";
import CheckboxLabels from "../../components/CheckBox";
import Button from "../../components/Button";
import Grid from "@mui/material/Unstable_Grid2";

const data1 = [
  { label: "쇼골프 프렌차이즈 가맹", id: "showgolf" },
  { label: "플라이트스코프 구매", id: "flight1" },
  { label: "플라이트스코프 창업", id: "flight2" },
  { label: "아카데미 레슨", id: "academy1" },
  { label: "아카데미 입점", id: "academy2" },
  { label: "신멤버스 가입", id: "sin" },
];
const data2 = [
  { label: "미보", id: "mv" },
  { label: "미보+ (MEVO PLUS)", id: "mvp" },
  { label: "미보레인지 (MEVO Range)", id: "mvr" },
];
const data3 = [
  { label: "신규창업", id: "new" },
  { label: "실내타석 교체", id: "indoor" },
  { label: "실외타석 교체", id: "outdoor" },
];

const data4 = [
  { label: "김포공항점", id: "kimpo" },
  { label: "가양점", id: "gayang" },
  { label: "도봉점", id: "dobong" },
  { label: "논현 더레인지", id: "nonhyun" },
  { label: "캐슬렉스 이성대", id: "castle" },
];

export default function Main() {
  const [showFlight1, setShowFlight1] = useState(false);
  const [showFlight2, setShowFlight2] = useState(false);
  const [showAcamemy1, setShowAcademy1] = useState(false);

  const changeSelect = (val) => {
    setShowFlight1(false);
    setShowFlight2(false);
    setShowAcademy1(false);
    switch (val) {
      case "flight1":
        setShowFlight1(true);
        break;
      case "flight2":
        setShowFlight2(true);
        break;
      case "academy1":
        setShowAcademy1(true);
        break;

      default:
        break;
    }
  };

  return (
    <Container maxWidth="sm" sx={{ px: 1, pt: 1 }}>
      <Box component="form">
        <Grid container spacing={1}>
          <Grid xs={12}>
            <Select
              data={data1}
              placeholder="질문 분류 선택(필수)"
              id="main_select"
              required
              changeSelect={changeSelect}
            />
          </Grid>
          <Grid xs={12}>
            <TextField id="name" placeholder="이름(필수)" required />
          </Grid>
          <Grid xs={12}>
            <TextField id="tel" placeholder="연락처(필수)" required />
          </Grid>

          {/* 플라이트스코프 구매 */}
          {showFlight1 && (
            <Grid xs={12}>
              <Select
                data={data2}
                placeholder="제품 선택(필수)"
                id="sub_select1"
                required
              />
            </Grid>
          )}

          {/* 플라이트스코프 창업 */}
          {showFlight2 && (
            <>
              <Grid xs={12}>
                <Select
                  data={data3}
                  placeholder="창업 유형 선택(필수)"
                  id="sub_select2"
                  required
                />
              </Grid>
              <Grid xs={12}>
                <TextField
                  id="storeRegion"
                  placeholder="희망 창업 지역(선택)"
                />
              </Grid>
              <Grid xs={12}>
                <TextField id="storeSize" placeholder="타석수(선택)" />
              </Grid>
            </>
          )}

          {/* 아카데미 레슨 */}
          {showAcamemy1 && (
            <>
              <Grid xs={12}>
                <Select
                  data={data4}
                  placeholder="지점 선택(필수)"
                  id="sub_select2"
                  required
                />
              </Grid>
            </>
          )}

          <Grid xs={12}>
            <TextField id="email" placeholder="이메일(선택)" />
          </Grid>

          <Grid xs={12}>
            <TextField id="memo" placeholder="문의 내용(선택)" multiline />
          </Grid>
          <Grid xs={12}>
            <CheckboxLabels
              link={{ text: "내용보기", href: "https://" }}
              label="[필수] 쇼골프 관련 문의 상담을 위한 필수 개인정보 수집 및 활용에 동의합니다."
            />
          </Grid>
        </Grid>
        <Stack
          spacing={1}
          direction="row"
          sx={{ mt: 2, display: "flex", justifyContent: "center" }}
        >
          <Button>취소</Button>
          <Button type="submit" variant="contained">
            제출
          </Button>
        </Stack>
      </Box>
    </Container>
  );
}
