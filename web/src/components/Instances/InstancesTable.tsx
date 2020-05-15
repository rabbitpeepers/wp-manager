import {
  Anchor,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
  Text,
} from 'grommet'

import { Badge } from 'src/components/common/Badge'
import React from 'react'

export const InstancesTable: React.FC = () => (
  <Box>
    <Table>
      <TableHeader>
        <TableRow>
          <TableCell scope="col">
            <Text>
              Id
            </Text>
          </TableCell>
          <TableCell scope="col">
            <Text>
              Domain
            </Text>
          </TableCell>
          <TableCell scope="col">
            <Text>
              Status
            </Text>
          </TableCell>
          <TableCell scope="col">
            <Text>
              Date
            </Text>
          </TableCell>
          <TableCell scope="col">
            <Text>
              Author
            </Text>
          </TableCell>
          <TableCell scope="col" />
        </TableRow>
      </TableHeader>
      <TableBody>
        <TableRow>
          <TableCell>
            <Text>
              123
            </Text>
          </TableCell>
          <TableCell>
            <Text>
              <b>hello</b>
              .xxx.com
            </Text>
          </TableCell>
          <TableCell>
            <Badge color="status-ok" label="deployed" />
          </TableCell>
          <TableCell>
            <Text>
              12/05/2019
            </Text>
          </TableCell>
          <TableCell>
            <Text>
              nikpl777@gmail.com
            </Text>
          </TableCell>
          <TableCell>
            <Anchor href="#" label="Details" />
          </TableCell>
        </TableRow>
      </TableBody>
    </Table>
  </Box>
)
