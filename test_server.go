package main

import (
	"fmt"
	"net"
	"os"
	"strings"
)

func SendFile(file *os.File, conn net.Conn) {
	for {
		buf := make([]byte, 1024)
		n, e := file.Read(buf)
		if e != nil || n == 0 {
			break
		}
		conn.Write(buf)
	}
}

func main() {
	fmt.Println("Serve Start")
	listener, e := net.Listen("tcp", "0.0.0.0:8000")
	if e != nil {
		panic(e)
	}

	for {
		conn, e := listener.Accept()
		if e != nil {
			fmt.Println(e)
			continue
		}
		defer conn.Close()
		read_buf := make([]byte, 1024)
		n, e := conn.Read(read_buf)
		if e != nil {
			fmt.Println(e)
			continue
		}
		header := string(read_buf[:n])
		lines := strings.Split(header, "\r\n")
		first_line := strings.Split(lines[0], " ")
		uri := first_line[1][1:]
		if uri == "" {
			uri = "index.html"
		}
		fmt.Println(uri)

		file, e := os.Open(uri)
		exists := !os.IsNotExist(e)

		if exists {
			conn.Write([]byte("HTTP/1.0 200 OK\r\n\r\n"))
			SendFile(file, conn)
		} else {
			conn.Write([]byte("HTTP/1.0 404 NOTFOUND\r\n\r\n"))
		}

		conn.Close()
	}
}
