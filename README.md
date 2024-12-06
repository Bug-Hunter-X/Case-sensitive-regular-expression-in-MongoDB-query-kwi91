# Case-sensitive regular expression in MongoDB query

This repo demonstrates a common error in MongoDB queries using regular expressions and how to solve it.

The bug is in the case-sensitive nature of the default $regex operator.  This can lead to unexpected results if you intend a case-insensitive search.

The solution provides the corrected query to address the issue and ensure a case-insensitive search.