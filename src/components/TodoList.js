import * as React from "react";
import Container from "@mui/material/Container";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import Grid from "@mui/material/Unstable_Grid2";
import TextField from "@mui/material/TextField";
import { v4 as uuidv4 } from "uuid";

// ICONS
import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";

// Components
import Todo from "./Todo";

// DIALOG IMPORTS
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";

// OTHERS
import { useTodos, useTodosDispatch } from "../contexts/todosContext";
import { useToast } from "../contexts/ToastContext";
import { useState, useEffect, useMemo, useReducer } from "react";
import todosReducer from "../reducers/todosReducer";

// import { TodosContext } from "../contexts/todosContext";
export default function TodoList() {
	console.log("re render");

	const todos = useTodos();
	const dispatch = useTodosDispatch();
	const { showHideToast } = useToast();

	const [dialogTodo, setDialogTodo] = useState(null);
	const [showDeleteDialog, setShowDeleteDialog] = useState(false);
	const [showUpdateDialog, setShowUpdateDialog] = useState(false);
	const [titleInput, setTitleInput] = useState("");
	const [displayedTodosType, setDisplayedTodosType] = useState("all");

	// filteration arrays

	const completedTodos = useMemo(() => {
		return todos.filter((t) => {
			console.log("calling completed todos");
			return t.isCompleted;
		});
	}, [todos]);

	const notCompletedTodos = useMemo(() => {
		return todos.filter((t) => {
			console.log("calling not completed todos");
			return !t.isCompleted;
		});
	}, [todos]);

	let todosToBeRendered = todos;

	if (displayedTodosType == "completed") {
		todosToBeRendered = completedTodos;
	} else if (displayedTodosType == "non-completed") {
		todosToBeRendered = notCompletedTodos;
	} else {
		todosToBeRendered = todos;
	}

	useEffect(() => {
		dispatch({ type: "get" });
	}, []);

	// ===== HANDLERS
	function changeDisplayedType(e) {
		setDisplayedTodosType(e.target.value);
	}

	function handleAddClick() {
		dispatch({ type: "added", payload: { newTitle: titleInput } });
		setTitleInput("");
		showHideToast("تمت الإضافة بنجاح");
	}

	function openDeleteDialog(todo) {
		setDialogTodo(todo);
		setShowDeleteDialog(true);
	}

	function openUpdateDialog(todo) {
		setDialogTodo(todo);
		setShowUpdateDialog(true);
	}

	function handleDeleteDialogClose() {
		setShowDeleteDialog(false);
	}

	function handleDeleteConfirm() {
		dispatch({ type: "deleted", payload: dialogTodo });
		setShowDeleteDialog(false);
		showHideToast("تم الحذف بنجاح");
	}

	function handleUpdateClose() {
		setShowUpdateDialog(false);
	}

	function handleUpdateConfirm() {
		dispatch({ type: "updated", payload: dialogTodo });
		setShowUpdateDialog(false);
		showHideToast("تم التحديث بنجاح");
	}

	const todosJsx = todosToBeRendered.map((t) => {
		return (
			<Todo
				key={t.id}
				todo={t}
				showDelete={openDeleteDialog}
				showUpdate={openUpdateDialog}
			/>
		);
	});

	return (
		<>
			{/* DELETE DIALOG */}
			<Dialog
				style={{ direction: "rtl" }}
				onClose={handleDeleteDialogClose}
				open={showDeleteDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">
					هل أنت متأكد من رغبتك في حذف المهمة؟
				</DialogTitle>
				<DialogContent>
					<DialogContentText id="alert-dialog-description">
						لا يمكنك التراجع عن الحذف بعد إتمامه
					</DialogContentText>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleDeleteDialogClose}>إغلاق</Button>
					<Button autoFocus onClick={handleDeleteConfirm}>
						نعم، قم بالحذف
					</Button>
				</DialogActions>
			</Dialog>
			{/* === DELETE DIALOG === */}

			{/* UPDATE DIALOG */}
			<Dialog
				style={{ direction: "rtl" }}
				onClose={handleUpdateClose}
				open={showUpdateDialog}
				aria-labelledby="alert-dialog-title"
				aria-describedby="alert-dialog-description"
			>
				<DialogTitle id="alert-dialog-title">تعديل مهمة</DialogTitle>
				<DialogContent>
					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="عنوان المهمة"
						fullWidth
						variant="standard"
						value={dialogTodo?.title}
						onChange={(e) => {
							setDialogTodo({
								...dialogTodo,
								title: e.target.value,
							});
						}}
					/>

					<TextField
						autoFocus
						margin="dense"
						id="name"
						label="التفاصيل"
						fullWidth
						variant="standard"
						value={dialogTodo?.details}
						onChange={(e) => {
							setDialogTodo({
								...dialogTodo,
								details: e.target.value,
							});
						}}
					/>
				</DialogContent>
				<DialogActions>
					<Button onClick={handleUpdateClose}>إغلاق</Button>
					<Button autoFocus onClick={handleUpdateConfirm}>
						تأكيد
					</Button>
				</DialogActions>
			</Dialog>
			{/* === UPDATE DIALOG */}

			<Container maxWidth="sm">
				<Card
					sx={{ minWidth: 275 }}
					style={{
						maxHeight: "80vh",
						overflow: "scroll",
					}}
				>
					<CardContent>
						<Typography variant="h2" style={{ fontWeight: "bold" }}>
							مهامي
						</Typography>
						<Divider />

						{/* FILTER BUTTONS */}
						<ToggleButtonGroup
							style={{ direction: "ltr", marginTop: "30px" }}
							value={displayedTodosType}
							exclusive
							onChange={changeDisplayedType}
							aria-label="text alignment"
							color="primary"
						>
							<ToggleButton value="non-completed">
								غير المنجز
							</ToggleButton>
							<ToggleButton value="completed">
								المنجز
							</ToggleButton>
							<ToggleButton value="all">الكل</ToggleButton>
						</ToggleButtonGroup>
						{/* ==== FILTER BUTTON ==== */}

						{/* ALL TODOS */}
						{todosJsx}
						{/* === ALL TODOS === */}

						{/* INPUT + ADD BUTTON */}
						<Grid
							container
							style={{ marginTop: "20px" }}
							spacing={2}
						>
							<Grid
								xs={8}
								display="flex"
								justifyContent="space-around"
								alignItems="center"
							>
								<TextField
									style={{ width: "100%" }}
									id="outlined-basic"
									label="عنوان المهمة"
									variant="outlined"
									value={titleInput}
									onChange={(e) => {
										setTitleInput(e.target.value);
									}}
								/>
							</Grid>

							<Grid
								xs={4}
								display="flex"
								justifyContent="space-around"
								alignItems="center"
							>
								<Button
									style={{ width: "100%", height: "100%" }}
									variant="contained"
									onClick={() => {
										handleAddClick();
									}}
									disabled={titleInput.length == 0}
								>
									إضافة
								</Button>
							</Grid>
						</Grid>
						{/*== INPUT + ADD BUTTON ==*/}
					</CardContent>
				</Card>
			</Container>
		</>
	);
}
