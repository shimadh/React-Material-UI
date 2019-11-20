import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TableHead from "@material-ui/core/TableHead";
import TableCell from "@material-ui/core/TableCell";
import TableRow from "@material-ui/core/TableRow";

const TableColumNames = props => {

  const { rows } = props;

  return (
    <TableHead>
      <TableRow>
        {rows.map(
          row => (
            <TableCell
              key={row.id}
              align={"left"}
              padding={row.disablePadding ? "none" : "default"}
            >
            {row.label}
            </TableCell>
          ),
          this
        )}
      </TableRow>
    </TableHead>
  );

};

const useToolbarStyles = makeStyles(theme => ({

}));

export default TableColumNames;