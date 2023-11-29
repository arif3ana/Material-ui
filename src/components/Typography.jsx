import { Typography } from "@mui/material";

function MuiTypography() {
    return  (
        <div>
            <Typography variant="h1">h1 Heading</Typography>
            <Typography variant="h2">h2 Heading</Typography>
            <Typography variant="h3">h3 Heading</Typography>
            <Typography variant="h4">h4 Heading</Typography>
            <Typography variant="h5">h5 Heading</Typography>
            <Typography variant="h6">h6 Heading</Typography>

            {/* menggunakan tag h1 tetapi menggunakan varian h4 menggunakan component*/}
            <Typography variant="h4" component='h1'>h4 Heading dengan tag h1 untuk semantic</Typography>

             {/* gutterBottom untuk menambahkan margin bottom pada Typhoraphy*/}
             <Typography variant="h4" component='h1' gutterBottom>h4 Heading dengan tag h1 untuk semantic</Typography>

            {/* varian lain dari tag h6 */}
            <Typography variant="subtitle1">Sub title 1</Typography>
            <Typography variant="subtitle2" gutterBottom>Sub title 2</Typography>

            {/* varian dari tag paragraf */}
            <Typography variant="body1" gutterBottom>Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, tempora officiis iure aspernatur, natus assumenda porro saepe veritatis voluptate numquam ipsum quidem? Blanditiis tenetur id est adipisci perspiciatis cum tempore.</Typography>
            <Typography variant="body2">Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo, tempora officiis iure aspernatur, natus assumenda porro saepe veritatis voluptate numquam ipsum quidem? Blanditiis tenetur id est adipisci perspiciatis cum tempore.</Typography>

        </div>
    )
}

export default MuiTypography;