import {differenceInDays} from 'date-fns';
import * as yup from 'yup';

const validationSchema = yup.object().shape({
  title: yup
    .string()
    .required('제목을 입력해주세요')
    .min(2, '2자 이상 입력해주세요')
    .max(20, '20자 이하로 입력해주세요'),
  startDate: yup.date().typeError('시작일을 지정은 필수 사항입니다'),
  endDate: yup
    .date()
    .when('startDate', (starDate, schema) => {
      return schema.test({
        test: (endDate: string | number | Date) => {
          if (!endDate) return true;
          return differenceInDays(new Date(starDate), new Date(endDate)) < 0;
        },
        message: '종료일이 시작일보다 빠를 수 없습니다',
      });
    })
    .transform(value => (String(value).includes('Invalid') ? null : value))
    .nullable(),
  budget: yup
    .number()
    .typeError('예산은 필수 입력 사항입니다 ')
    .min(10, '최소 10원이상 입력해주세요')
    .max(1000000000000, '최대 1,000,000,000,000원 이하 입력해주세요'),
  roas: yup.number().typeError('수익률을 입력해주세요'),
  cost: yup
    .number()
    .typeError('광고비용은 필수 입력 사항입니다 ')
    .min(10, '최소 10원이상 입력해주세요')
    .max(1000000000000, '최대 1,000,000,000,000원 이하 입력해주세요'),
  convValue: yup
    .number()
    .typeError('매출은 필수 입력 사항입니다 ')
    .min(10, '최소 10원이상 입력해주세요')
    .max(1000000000000, '최대 1,000,000,000,000원 이하 입력해주세요'),
});

export default validationSchema;
