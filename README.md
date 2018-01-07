# react-semantic-table
A simple datatable implementation using semantic ui

## Transformed Schema (JSON)
Once the data is set, the library formats it so that it can processed and the table can be built. I have left this as a reference.

``` json
{
    "$schema" : "http://json-schema.org/draft-03/schema",
    "type": "object",
    "title": "Table",
    "properties" {
        "props": {
            "type": "object",
            "title": "Table",
            "properties": {
                "basic": {
                    "type": "boolean",
                    "default": true
                },
                "pagination": {
                    "type": "boolean",
                    "default": true
                }
            }
        },
        "children" {
            "type": "object",
            "title": "Header,Footer,Body",
            "properties": {
                "body": {
                    "type": "object",
                    "title": "Body",
                    "properties": {
                        "props": {
                            "type": "object",
                            "title": "Body Properties",
                            "properties": {
                                
                            }
                        },
                        "children": {
                            "type": "object",
                            "title": "Row",
                            "properties": {
                                "props": {
                                    "type": "object",
                                    "title": "Row Properties",
                                    "properties": {
                                        
                                    }
                                },
                                "children" {
                                    "type": "object",
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}
```
