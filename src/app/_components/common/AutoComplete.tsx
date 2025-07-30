// // import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import { Autocomplete, TextField, Box } from "@mui/material";
// import { styled } from "@mui/material/styles";
// import { useState } from "react";

// type SchoolOption = {
//   id: string;
//   name: string;
// };

// const AutocompleteSchool = Autocomplete as typeof Autocomplete<SchoolOption>;

// interface IProps {
//   options: SchoolOption[];
//   onChange: (value: string | null) => void;
// }

// export default function SchoolAutoComplete(props: IProps) {
//   const { options, onChange } = props;

//   const [value, setValue] = useState<SchoolOption | null>(null);

//   const handleChange = (newValue: SchoolOption | null) => {
//     setValue(newValue);
//     onChange(newValue?.id ?? null);
//   };

//   return (
//     <StyledAutocomplete
//       disablePortal
//       popupIcon={<ArrowDropDownIcon />}
//       options={options}
//       getOptionLabel={(option) => option.name} // ✅ 오류 해결됨
//       isOptionEqualToValue={(option, value) => option.id === value.id}
//       value={value}
//       onChange={(event, newValue) => handleChange(newValue)}
//       renderOption={(props, option) => (
//         <Box component="li" {...props} key={option.id}>
//           {option.name}
//           {/* {<span key={option.id}>{` (${option.name})`}</span>} */}
//         </Box>
//       )}
//       noOptionsText="검색결과가 없습니다."
//       renderInput={(params) => (
//         <TextField
//           {...params}
//           placeholder="학교명을 입력하세요"
//           variant="outlined"
//         />
//       )}
//     />
//   );
// }

// const StyledAutocomplete = styled(AutocompleteSchool)(({ theme }) => ({
//   width: "100%",
//   maxWidth: "400px",
//   "& .MuiInputBase-root": {
//     width: "100%",
//     minHeight: 52,
//     borderRadius: 12,
//     "& fieldset": {
//       borderColor: `${theme.palette.grey[400]} !important`,
//     },
//     "&:hover fieldset": {
//       borderColor: `${theme.palette.grey[400]} !important`,
//     },
//     "&.Mui-focused fieldset": {
//       borderColor: `#3196ff !important`,
//     },
//   },
// }));
