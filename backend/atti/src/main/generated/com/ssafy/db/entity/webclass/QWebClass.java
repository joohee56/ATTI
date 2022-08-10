package com.ssafy.db.entity.webclass;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QWebClass is a Querydsl query type for WebClass
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QWebClass extends EntityPathBase<WebClass> {

    private static final long serialVersionUID = 527736652L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QWebClass webClass = new QWebClass("webClass");

    public final ListPath<Attendance, QAttendance> attendances = this.<Attendance, QAttendance>createList("attendances", Attendance.class, QAttendance.class, PathInits.DIRECT2);

    public final com.ssafy.db.entity.chat.QChatRoom chatroom;

    public final QCourse course;

    public final com.ssafy.db.entity.depart.QDepart depart;

    public final NumberPath<Long> webclaassId = createNumber("webclaassId", Long.class);

    public final DateTimePath<java.util.Date> webclassEndTime = createDateTime("webclassEndTime", java.util.Date.class);

    public final DateTimePath<java.util.Date> webclassStartTime = createDateTime("webclassStartTime", java.util.Date.class);

    public QWebClass(String variable) {
        this(WebClass.class, forVariable(variable), INITS);
    }

    public QWebClass(Path<? extends WebClass> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QWebClass(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QWebClass(PathMetadata metadata, PathInits inits) {
        this(WebClass.class, metadata, inits);
    }

    public QWebClass(Class<? extends WebClass> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.chatroom = inits.isInitialized("chatroom") ? new com.ssafy.db.entity.chat.QChatRoom(forProperty("chatroom"), inits.get("chatroom")) : null;
        this.course = inits.isInitialized("course") ? new QCourse(forProperty("course"), inits.get("course")) : null;
        this.depart = inits.isInitialized("depart") ? new com.ssafy.db.entity.depart.QDepart(forProperty("depart"), inits.get("depart")) : null;
    }

}

