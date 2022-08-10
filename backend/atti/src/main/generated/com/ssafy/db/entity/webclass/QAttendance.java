package com.ssafy.db.entity.webclass;

import static com.querydsl.core.types.PathMetadataFactory.*;

import com.querydsl.core.types.dsl.*;

import com.querydsl.core.types.PathMetadata;
import javax.annotation.Generated;
import com.querydsl.core.types.Path;
import com.querydsl.core.types.dsl.PathInits;


/**
 * QAttendance is a Querydsl query type for Attendance
 */
@Generated("com.querydsl.codegen.EntitySerializer")
public class QAttendance extends EntityPathBase<Attendance> {

    private static final long serialVersionUID = 510758321L;

    private static final PathInits INITS = PathInits.DIRECT2;

    public static final QAttendance attendance = new QAttendance("attendance");

    public final StringPath attendancdContent = createString("attendancdContent");

    public final NumberPath<Long> attendanceId = createNumber("attendanceId", Long.class);

    public final com.ssafy.db.entity.user.QUser user;

    public final QWebClass webclass;

    public QAttendance(String variable) {
        this(Attendance.class, forVariable(variable), INITS);
    }

    public QAttendance(Path<? extends Attendance> path) {
        this(path.getType(), path.getMetadata(), PathInits.getFor(path.getMetadata(), INITS));
    }

    public QAttendance(PathMetadata metadata) {
        this(metadata, PathInits.getFor(metadata, INITS));
    }

    public QAttendance(PathMetadata metadata, PathInits inits) {
        this(Attendance.class, metadata, inits);
    }

    public QAttendance(Class<? extends Attendance> type, PathMetadata metadata, PathInits inits) {
        super(type, metadata, inits);
        this.user = inits.isInitialized("user") ? new com.ssafy.db.entity.user.QUser(forProperty("user"), inits.get("user")) : null;
        this.webclass = inits.isInitialized("webclass") ? new QWebClass(forProperty("webclass"), inits.get("webclass")) : null;
    }

}

