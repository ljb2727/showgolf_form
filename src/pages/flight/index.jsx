import { Container, Stack, Box } from "@mui/material";
import Select from "../../components/Select";
import TextField from "../../components/TextField";
import CheckboxLabels from "../../components/CheckBox";
import Button from "../../components/Button";
import Grid from "@mui/material/Unstable_Grid2";

const data2 = [
  { label: "미보", id: "mv" },
  { label: "미보+ (MEVO PLUS)", id: "mvp" },
  { label: "미보레인지 (MEVO Range)", id: "mvr" },
];

export default function Flight() {
  const onSubmit = (event) => {
    event.preventDefault();
  };

  return (
    <Container sx={{ p: { xs: 2 }, pt: 1 }}>
      <Box component="form" onSubmit={onSubmit}>
        <Grid container spacing={1}>
          <Grid xs={12}>
            <Select
              data={data2}
              placeholder="제품 선택(필수)"
              id="sub_select1"
              required
            />
          </Grid>
          <Grid xs={12}>
            <TextField id="key" placeholder="시리얼 번호(필수)" required />
          </Grid>
          <Grid xs={12}>
            <TextField id="name" placeholder="이름(필수)" required />
          </Grid>
          <Grid xs={12}>
            <TextField id="tel" placeholder="연락처(필수)" required />
          </Grid>

          <Grid xs={12}>
            <CheckboxLabels
              modal={{
                label: "내용보기",
                title: "개인정보 수집 동의",
                substance: `개인정보 수집 및 이용에 관한 안내<br><br>
			개인정보 수집 및 이용에 거부할 수 있는 권리가 있으며, 
			<span class="inline_block">거부할 경우 문의 등록에 제한이 있습니다.</span>
			<br><br>

			1. 개인정보 수집 및 이용 목적<br>
			- 문의 내용에 대한 유선 회신<br>
			- 내용 처리 및 안내 등을 위한 정보 확보<br><br>

			2. 수집하는 항목<br>
			- 이름, 연락처, 시리얼 번호<br><br>

			3. 개인정보 수집 및 이용 기간<br>
			- 개인정보 이용 목적 달성 시 까지`,
              }}
              //link={{ text: "test", href: "/" }}
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
