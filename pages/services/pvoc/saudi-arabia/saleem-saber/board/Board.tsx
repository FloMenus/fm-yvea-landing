"use client";

import { useState } from "react";

import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TablePagination from "@mui/material/TablePagination";
import TableRow from "@mui/material/TableRow";

import { useTranslation } from "next-i18next";

import data from "./data.json";

const columns = [
  { id: "scope", label: "Scope", width: 220 },
  {
    id: "approbation",
    label: "Type d'approbation",
    width: 20,
  },
  {
    id: "reglementation",
    label: "Réglementation technique",
    width: 200,
  },
];

function createData(
  scope: string,
  approbation: string,
  reglementation: string
) {
  return { scope, approbation, reglementation };
}

const rows = data.map((item) =>
  createData(item.scope, item.approbation, item.reglementation)
);

export default function Board() {
  const { t } = useTranslation("pvoc_saleem_saber_board");

  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event: unknown, newPage: number) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column, index) => (
                <TableCell
                  key={index}
                  style={{
                    width: column.width,
                  }}
                >
                  {t(column.label)}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>

          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.scope}>
                    {columns.map((column) => {
                      const value: string = Object(row)[column.id];
                      return <TableCell key={column.id}>{t(value)}</TableCell>;
                    })}
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[10, 25, 100]}
        component="div"
        count={rows.length}
        rowsPerPage={rowsPerPage}
        labelRowsPerPage={t("Lignes par page")}
        page={page}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />
    </Paper>
  );
}
