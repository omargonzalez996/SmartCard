import { useEffect, useState } from 'react';

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

export default function AppointmentForm({ openModal }) {
    const [isFormValid, setIsFormValid] = useState(false);
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [phone, setPhone] = useState('');
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [time, setTime] = useState('');
    const [message, setMessage] = useState('');
    const [interest, setInterest] = useState({
        website: false,
        onlineStore: false,
        api: false,
        crm: false,
        other: false
    });

    const handleOpen = () => openModal(true);
    const handleClose = () => openModal(false);

    const labelStyle = 'font-semibold text-xs text-slate-700'
    const inputStyle = 'bg-gray-200 shadow-inner p-2 rounded-md border-1 border-slate-600 focus:outline-none'

    const handleRequest = (e) => {
        e.preventDefault();

    }

    const handleCheckboxChange = (event) => {
        const { name, checked } = event.target;

        setInterest((prevState) => ({
            ...prevState,
            [name]: checked,
        }));
    };

    useEffect(() => {
        const { website, onlineStore, api, crm } = interest;
        const isFormValid = name && email && phone && date && time && message && (website || onlineStore || api || crm);
        setIsFormValid(isFormValid);
    }, [name, email, phone, date, time, message, interest]);

    return (
        <div>
            <Button onClick={handleOpen}>Open modal</Button>
            <Modal
                open={openModal}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={{
                    maxWidth: 500,
                    maxHeight: 700,
                    overflowY: 'scroll',
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: 400,
                    bgcolor: 'background.paper',
                    borderRadius: 2,
                    boxShadow: 24,
                    p: 4,
                    fontSize: 10,
                    fontWeight: 'semibold',
                    '&::-webkit-scrollbar': { display: 'none' },
                    '-ms-overflow-style': 'none',
                    'scrollbar-width': 'none'
                }}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Book Appointment
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Enter your information to book an appointment.
                    </Typography>
                    <div className="border-t border-gray-300 my-4" />
                    <div>
                        <form onSubmit={(e) => handleRequest(e)} className="flex flex-col space-y-2 text-xs">
                            <div className="flex flex-col space-y-2 text-xs mb-5">
                                <label className={labelStyle} htmlFor="name">NAME</label>
                                <input
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className={inputStyle}
                                    type="text" id="name" name="name" />
                                <label className={labelStyle} htmlFor="email">EMAIL</label>
                                <input
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className={inputStyle}
                                    type="email" id="email" name="email" />
                                <label className={labelStyle} htmlFor="phone">PHONE</label>
                                <input
                                    value={phone}
                                    onChange={(e) => setPhone(e.target.value)}
                                    className={inputStyle}
                                    type="tel" id="phone" name="phone" />
                            </div>
                            <div className='flex flex-col space-y-2 text-xs mb-5'>
                                <label className={labelStyle} >WHAT ARE YOU WANTING TO BUILD?</label>
                                <FormGroup>
                                    <FormControlLabel
                                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                                        control={
                                            <Checkbox
                                                name='website'
                                                checked={interest.website}
                                                onChange={handleCheckboxChange}
                                            />}
                                        label={
                                            <Typography style={{ fontSize: '14px' }}>
                                                Website
                                            </Typography>} />
                                    <FormControlLabel
                                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                                        control={
                                            <Checkbox
                                                name='onlineStore'
                                                checked={interest.onlineStore}
                                                onChange={handleCheckboxChange}
                                            />}
                                        label={
                                            <Typography style={{ fontSize: '14px' }}>
                                                Online Store (eCommerce)
                                            </Typography>} />
                                    <FormControlLabel
                                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                                        control={
                                            <Checkbox
                                                name='api'
                                                checked={interest.api}
                                                onChange={handleCheckboxChange}
                                            />}
                                        label={
                                            <Typography style={{ fontSize: '14px' }} >
                                                API / Data Integraion
                                            </Typography>} />
                                    <FormControlLabel
                                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                                        control={
                                            <Checkbox
                                                name='crm'
                                                checked={interest.crm}
                                                onChange={handleCheckboxChange}
                                            />}
                                        label={
                                            <Typography style={{ fontSize: '14px' }} >
                                                Customer Relationship Management (CRM)
                                            </Typography>} />
                                    <FormControlLabel
                                        sx={{ '& .MuiSvgIcon-root': { fontSize: 20 } }}
                                        control={
                                            <Checkbox
                                                name='other'
                                                checked={interest.other}
                                                onChange={handleCheckboxChange}
                                            />}
                                        label={
                                            <Typography style={{ fontSize: '14px' }} >
                                                Other
                                            </Typography>} />
                                </FormGroup>
                            </div>
                            <div className="flex flex-col space-y-2 text-xs mb-10">
                                <label className={labelStyle} htmlFor="date">DATE</label>
                                <input
                                    value={date}
                                    onChange={(e) => setDate(e.target.value)}
                                    className={inputStyle}
                                    type="date" id="date" name="date" />
                                <label className={labelStyle} htmlFor="time">TIME</label>
                                <input
                                    value={time}
                                    onChange={(e) => setTime(e.target.value)}
                                    className={inputStyle}
                                    type="time" id="time" name="time" />
                                <label className={labelStyle} htmlFor="message">MESSAGE</label>
                                <textarea
                                    value={message}
                                    onChange={(e) => setMessage(e.target.value)}
                                    className='bg-gray-200 h-20 shadow-inner p-2 rounded-md border-1 border-slate-600 focus:outline-none'
                                    name="message" id="message" />
                            </div>
                            <Button disabled={!isFormValid} type="submit" variant="contained" style={{ marginTop: '20px' }}>Request Appointment</Button>
                            <Button onClick={() => handleClose()} type="button" variant="contained" style={{ marginTop: '10px', backgroundColor: 'gray' }}>Close</Button>
                        </form>
                    </div>
                </Box>
            </Modal>
        </div>
    );
}