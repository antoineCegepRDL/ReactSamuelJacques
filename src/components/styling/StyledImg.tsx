import { Box } from '@mui/material';
import { SxProps, Theme, styled } from '@mui/material/styles';

const ImgStyled = styled('img')({});

interface ImgProps {
    src:string,
    alt:string,
    sx?:SxProps<Theme> | undefined
}

const Img = ({src, alt, sx}: ImgProps) => 
<Box sx={{display:'flex', justifyContent:'center', alignItems:'center', height:'100%'}}>
    <ImgStyled src={src} alt={alt} sx={sx} />
</Box>

export default Img;